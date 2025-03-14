import { SidebarTrigger } from "../ui/sidebar";
import { auth } from "@/auth";
import ProgressBar from "../shared/ProgressBar";
import DropdownMenu from "./DropdownMenu";

const DashboardNavBar = async () => {
  const session = await auth();

  return (
    <header className="dark:!bg-primary !bg-white !justify-between !static md:!px-4">
      <div>
        <SidebarTrigger />
      </div>
      <nav className="flex items-center gap-4">
        <ProgressBar />
        <p>{session?.user?.name}</p>
        <DropdownMenu />
      </nav>
    </header>
  );
};

export default DashboardNavBar;
