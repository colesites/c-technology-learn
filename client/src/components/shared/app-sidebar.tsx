"use client";

import { Sidebar, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import Image from "next/image";
import FrontendContent from "./FrontendContent";
import { usePathname } from "next/navigation";
import BackendContent from "./BackendContent";
import FullStackContent from "./FullStackContent";
import { Separator } from "../ui/separator";
import SignOutButton from "../auth/SignOutButton";

export function AppSidebar({
  sidebarMenuItemData,
}: {
  sidebarMenuItemData: any;
}) {
  const pathname = usePathname() as string;

  function isFrontendRoute(path: string) {
    return path.startsWith("/dashboard/front-end");
  }

  function isBackendRoute(path: string) {
    return path.startsWith("/dashboard/back-end");
  }

  function isFullStackRoute(path: string) {
    return path.startsWith("/dashboard/full-stack");
  }

  return (
    <Sidebar className="py-3.5 pl-2">
      <SidebarHeader>
        <div className="flex items-center space-x-4 mb-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={25}
            height={25}
            className="hidden dark:block"
          />
          <Image
            src="/dark-logo.png"
            alt="logo"
            width={25}
            height={25}
            className="block dark:hidden"
          />
          <h2 className="!text-base dark:!text-white !text-primary">C Tech Learn</h2>
        </div>
        <Separator className="bg-gray-400/40" />
        {isFrontendRoute(pathname) && (
          <h3 className="!text-sm !text-left dark:!text-white !text-primary">Frontend Development</h3>
        )}
        {isBackendRoute(pathname) && (
          <h3 className="!text-sm !text-left dark:!text-white !text-primary">Backend Development</h3>
        )}
        {isFullStackRoute(pathname) && (
          <h3 className="!text-sm !text-left dark:!text-white !text-primary">Fullstack Development</h3>
        )}
      </SidebarHeader>
      {isFrontendRoute(pathname) && (
        <FrontendContent sidebarMenuItemData={sidebarMenuItemData} />
      )}
      {isBackendRoute(pathname) && <BackendContent />}
      {isFullStackRoute(pathname) && <FullStackContent />}
      <SidebarFooter>
        <SignOutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
