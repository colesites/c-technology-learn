"use client";

import { SidebarTrigger } from "../ui/sidebar";
import ProgressBar from "./ProgressBar";
import DropdownMenu from "./DropdownMenu";
import React, { useEffect, useState } from "react";
import { getSidebarMenuItemsAPI } from "@/app/api";
import { getSession } from "@/actions/GetSession";

const DashboardNavBar = () => {
  const [session, setSession] = useState<any>(null);
  const [sidebarMenuItemData, setSidebarMenuItemData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessionData = await getSession();
        setSession(sessionData);

        const sidebarData = await getSidebarMenuItemsAPI();
        setSidebarMenuItemData(sidebarData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="dark:!bg-primary !bg-white !justify-between !static md:!px-4">
      <div>
        <SidebarTrigger />
      </div>
      <nav className="flex items-center gap-4">
        {sidebarMenuItemData && <ProgressBar />}
        {session?.user?.name && <p>{session.user.name}</p>}
        <DropdownMenu />
      </nav>
    </header>
  );
};

export default DashboardNavBar;
