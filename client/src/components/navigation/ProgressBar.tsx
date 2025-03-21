"use client";

import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  fetchCompletedSubtopicsLength,
  getSidebarMenuItemsAPI,
} from "@/app/api/index";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = async () => {
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
      setProgress(frontEndProgress);
    };

    calculateProgress();
  }, []);

  return (
    <>
      <div className="size-8 dark:hidden">
        <CircularProgressbar
          value={progress}
          text={`${progress.toFixed(0)}%`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textSize: "32px",
            pathTransitionDuration: 0.5,
            pathColor: `rgb(22, 163, 74)`,
            textColor: "#0b0121",
            trailColor: "#0b012140",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      <div className="size-8 hidden dark:block">
        <CircularProgressbar
          value={progress}
          text={`${progress.toFixed(0)}%`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textSize: "32px",
            pathTransitionDuration: 0.5,
            pathColor: `rgb(34, 197, 94)`,
            textColor: "#ffffff",
            trailColor: "#ffffff40",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
    </>
  );
};

export default ProgressBar;
