"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
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
  subtopics: { subtopic: string, url: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<any>(null);

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
        {subtopics.map((item) => (
          <CollapsibleContent key={item.subtopic}>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <Link href={`/dashboard/front-end/${item.url}/${session?.user?.name || "guest"}`}>
                  <SidebarMenuButton className="min-h-10">
                    <MdOutlineRadioButtonUnchecked />
                    {item.subtopic}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        ))}
      </SidebarMenuItem>
    </Collapsible>
  );
};

export default CollapsibleSection;
