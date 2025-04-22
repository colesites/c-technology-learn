"use client";

import { GoSignOut } from "react-icons/go";
import { signOutAction } from "@/actions/signOutAction";

const SignOutButton = () => {
  return (
    <form
      action={signOutAction}
      className="flex gap-4 items-center p-2 rounded-md hover:bg-secondary hover:text-primary cursor-pointer"
    >
      <GoSignOut className="size-5" />
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default SignOutButton;
