"use client";

import React, { useState, useEffect } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const DropdownMenu = () => {
  const [darkmode, setDarkmode] = useState(true);
  const [lightmode, setLightmode] = useState(false);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkmode, lightmode]);

  const handleLightmode = () => {
    if (darkmode) {
      setDarkmode(false);
      setLightmode(true);
    }
  };

  const handleDarkmode = () => {
    if (lightmode) {
      setLightmode(false);
      setDarkmode(true);
    }
  };

  return (
    <div className="dropdown dropdown-hover">
      {lightmode && <IoMdSunny className="size-5" />}
      {darkmode && <IoMdMoon className="size-5" />}
      <div className="dropdown-menu dropdown-menu-bottom-left gap-2 w-40 p-3 dark:bg-primary/90 bg-white border border-gray-400/40">
        <button
          className={
            lightmode
              ? "bg-gray-200/90 dropdown-btn"
              : `dropdown-btn ${darkmode && "dark:hover:bg-gray-500/20"}`
          }
          onClick={handleLightmode}
        >
          <IoMdSunny className="size-5" />
          Light
        </button>
        <button
          className={
            darkmode
              ? "dark:bg-gray-500/40 dropdown-btn"
              : `dropdown-btn ${lightmode && "hover:bg-gray-200/30"}`
          }
          onClick={handleDarkmode}
        >
          <IoMdMoon className="size-5" />
          Dark
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;