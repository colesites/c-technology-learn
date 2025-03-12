import { signOut } from "@/auth";
import React from "react";
import { GoSignOut } from "react-icons/go";

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        await signOut();
      }}
      className="flex gap-4 items-center p-2 rounded-md hover:bg-secondary hover:text-primary cursor-pointer"
    >
      <GoSignOut className="size-5" />
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default SignOutButton;
