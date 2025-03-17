"use client";

import { usePathname } from "next/navigation";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "../../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/collapsible";
import { IoIosArrowDown, IoIosArrowForward, IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { fetchProgressData, updateProgressData } from "@/app/api";

const CollapsibleSection = ({
  title,
  icon: Icon,
  subtopics,
}: {
  title: string;
  icon: React.ElementType;
  subtopics: { subtopic: string; url: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [completedSubtopics, setCompletedSubtopics] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();
  const updateInProgressRef = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    let isMounted = true;

    const loadProgressData = async () => {
      const { session: fetchedSession, completedSubtopics: fetchedCompletedSubtopics } =
        await fetchProgressData();

      if (!isMounted) return;

      setSession(fetchedSession);
      setCompletedSubtopics(fetchedCompletedSubtopics);
    };

    loadProgressData();

    return () => {
      isMounted = false;
    };
  }, []);

  const updateProgress = useCallback(
    async (subtopic: string) => {
      if (!session?.user?.email || updateInProgressRef.current[subtopic]) {
        return;
      }

      updateInProgressRef.current[subtopic] = true;

      try {
        const updatedProgress = await updateProgressData(session, completedSubtopics, subtopic);
        setCompletedSubtopics(updatedProgress);
      } finally {
        updateInProgressRef.current[subtopic] = false;
      }
    },
    [session, completedSubtopics]
  );

  const toggleCompletion = (subtopic: string) => {
    if (completedSubtopics[subtopic]) return;

    setCompletedSubtopics((prev) => ({
      ...prev,
      [subtopic]: true,
    }));

    updateProgress(subtopic);
  };

  return (
    <Collapsible className="group/collapsible" onOpenChange={setIsOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="min-h-10">
            <Icon /> {title}
            {isOpen ? (
              <IoIosArrowDown className="ml-auto text-lg" />
            ) : (
              <IoIosArrowForward className="ml-auto text-lg" />
            )}
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          {subtopics.map((item) => {
            const isActive =
              pathname === `/dashboard/front-end/${item.url}/${session?.user?.name}`;

            return (
              <SidebarMenuSub key={item.subtopic}>
                <SidebarMenuSubItem>
                  <SidebarMenuButton
                    className={`min-h-10 ${
                      isActive
                        ? "bg-gray-200/50 dark:bg-secondary dark:text-primary"
                        : "bg-transparent"
                    }`}
                  >
                    <div
                      onClick={() => toggleCompletion(item.subtopic)}
                      className="mr-2 cursor-pointer"
                    >
                      {completedSubtopics[item.subtopic] ? (
                        <IoIosCheckmarkCircle className="text-green-700" />
                      ) : (
                        <MdOutlineRadioButtonUnchecked />
                      )}
                    </div>
                    <Link href={`/dashboard/front-end/${item.url}/${session?.user?.name}`}>
                      {item.subtopic}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            );
          })}
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

export default CollapsibleSection;