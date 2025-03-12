import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { auth } from "@/auth";
import ProgressBar from "../shared/ProgressBar";

const DashboardNavBar = async () => {
  const session = await auth();

  return (
    <header className="!justify-between !static md:!px-4">
      <div>
        <SidebarTrigger />
      </div>
      <nav className="flex items-center gap-4">
        <ProgressBar />
        <p>{session?.user?.name}</p>
      </nav>
    </header>
  );
};

export default DashboardNavBar;
