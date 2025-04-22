"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthSocial = () => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <div className="w-3/6">
        <Button className="flex w-full items-center border border-indigo-900/50 bg-indigo-950/30 text-white hover:bg-indigo-900/50">
          <FcGoogle className="mr-2" />
          <span>Google</span>
        </Button>
      </div>
      <div className="w-3/6">
        <Button className="flex w-full items-center border border-indigo-900/50 bg-indigo-950/30 text-white hover:bg-indigo-900/50">
          <FaGithub className="mr-2" />
          <span>Github</span>
        </Button>
      </div>
    </div>
  );
};

export default AuthSocial;
