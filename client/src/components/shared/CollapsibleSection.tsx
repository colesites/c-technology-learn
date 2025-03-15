"use client";

import { usePathname } from "next/navigation";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { IoIosArrowDown, IoIosArrowForward, IoIosCheckmarkCircle } from "react-icons/io";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getSession } from "@/actions/GetSession";

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
  const pathname = usePathname();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

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
              pathname ===
              `/dashboard/front-end/${item.url}/${session?.user?.name}`;

            return (
              <SidebarMenuSub key={item.subtopic}>
                <SidebarMenuSubItem>
                  <Link
                    href={`/dashboard/front-end/${item.url}/${
                      session?.user?.name
                    }`}
                  >
                    <SidebarMenuButton
                      className={`min-h-10 ${
                        isActive
                          ? "bg-gray-200/50 dark:bg-secondary dark:text-primary"
                          : "bg-transparent"
                      }`}
                    >
                      {true ? (
                        <IoIosCheckmarkCircle className="text-green-500" />
                      ) : (
                        <MdOutlineRadioButtonUnchecked />
                      )}
                      {item.subtopic}
                    </SidebarMenuButton>
                  </Link>
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
