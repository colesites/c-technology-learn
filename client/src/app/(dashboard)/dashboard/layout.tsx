import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/sidebar/app-sidebar";
import { getSidebarMenuItemsAPI } from "@/app/api";
import DashboardNavBar from "@/components/navigation/DashboardNavBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: "C Tech Learn Dashboard",
  }
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
      <div className={`${montserrat.variable} dark:bg-primary bg-white dark:text-white text-primary`}>
        <SidebarProvider>
          <AppSidebar sidebarMenuItemData={sidebarMenuItemData} />
          <main className="w-full">
            <DashboardNavBar />
            {children}
          </main>
        </SidebarProvider>
      </div>
  );
}
