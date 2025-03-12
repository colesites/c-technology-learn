"use client";

import React from "react";
import { SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import { CiGlobe } from "react-icons/ci";
import { FaGit, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import CollapsibleSection from "./CollapsibleSection";

const FrontendContent = ({ sidebarMenuItemData }: { sidebarMenuItemData: any }) => {
  const sidebarSections = [
    { title: sidebarMenuItemData.the_internet, icon: CiGlobe, subtopics: sidebarMenuItemData?.the_internet_subtopics?.items || [] },
    { title: sidebarMenuItemData.html, icon: FaHtml5, subtopics: sidebarMenuItemData?.html_subtopics?.items || [] },
    { title: sidebarMenuItemData.css, icon: IoLogoCss3, subtopics: sidebarMenuItemData?.css_subtopics?.items || [] },
    { title: sidebarMenuItemData.css_framework_lib, icon: RiTailwindCssFill, subtopics: sidebarMenuItemData?.css_subtopics?.items || [] },
    { title: sidebarMenuItemData.js, icon: RiJavascriptFill, subtopics: sidebarMenuItemData?.css_subtopics?.items || [] },
    { title: sidebarMenuItemData.ts, icon: BiLogoTypescript, subtopics: sidebarMenuItemData?.css_subtopics?.items || [] },
    { title: sidebarMenuItemData.vcs, icon: FaGit, subtopics: sidebarMenuItemData?.css_subtopics?.items || [] },
    { title: sidebarMenuItemData.js_framework_lib, icon: FaReact, subtopics: sidebarMenuItemData?.css_subtopics?.items || [] },
  ];

  return (
    <SidebarContent>
      <SidebarMenu className="space-y-2">
        {sidebarSections.map((section, index) => (
          <CollapsibleSection key={index} title={section.title} icon={section.icon} subtopics={section.subtopics} />
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton>Online Code Editor</SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
  );
};

export default FrontendContent;
