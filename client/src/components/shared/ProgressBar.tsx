"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Add this import

interface ProgressBarProps {
  percentage?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage = 0 }) => {
  return (
    <div className="size-8">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: 'round',
          textSize: '32px',
          pathTransitionDuration: 0.5,
          pathColor: `rgb(34, 197, 94)`,
          textColor: '#ffffff',
          trailColor: '#ffffff40',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default ProgressBar;