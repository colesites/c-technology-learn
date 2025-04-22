"use client";

import React from "react";
import { Separator } from "../ui/separator";

const AuthSeperator = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Separator className="bg-indigo-900/30" />
      <span className="absolute bg-[#0b0121] px-2 text-xs text-zinc-500">
        or continue with
      </span>
    </div>
  );
};

export default AuthSeperator;
