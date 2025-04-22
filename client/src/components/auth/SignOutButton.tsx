"use client";

import React from "react";
import { GoSignOut } from "react-icons/go";
import { signOut } from "@/auth";

const SignOutButton = () => {
  return (
    <button
      onClick={async () => {
        await signOut();
      }}
      className="flex gap-4 items-center p-2 rounded-md hover:bg-secondary hover:text-primary cursor-pointer"
    >
      <GoSignOut className="size-5" />
      Sign Out
    </button>
  );
};

export default SignOutButton;
