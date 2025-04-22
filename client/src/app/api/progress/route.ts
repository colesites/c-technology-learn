import { NextResponse } from "next/server";
import {
  fetchCompletedSubtopicsLength,
  getSidebarMenuItemsAPI,
} from "@/app/api/index";

export const revalidate = 10; // Enables ISR with a 20s cache

export async function GET() {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();
  const completedTopics = await fetchCompletedSubtopicsLength();

  const frontEndSubtopics = {
    internet: sidebarMenuItemData.the_internet_subtopics.items,
    html: sidebarMenuItemData.html_subtopics.items,
    css: sidebarMenuItemData.css_subtopics.items,
    cssFrameworks: sidebarMenuItemData.css_framework_lib_subtopics.items,
    javascript: sidebarMenuItemData.js_subtopics.items,
    versionControl: sidebarMenuItemData.vcs_subtopics.items,
    typescript: sidebarMenuItemData.ts_subtopics.items,
    jsFrameworks: sidebarMenuItemData.js_framework_lib_subtopics.items,
  };

  const total = Object.values(frontEndSubtopics).reduce(
    (sum, items) => sum + items.length,
    0
  );

  const frontEndProgress = (completedTopics / total) * 100;

  return NextResponse.json({ progress: frontEndProgress });
}
