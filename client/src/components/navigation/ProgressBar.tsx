"use client";

import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch("/api/progress");
        const data = await response.json();
        setProgress(data.progress);
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchProgress();

    const interval = setInterval(fetchProgress, 10000);
    return () => clearInterval(interval);
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
