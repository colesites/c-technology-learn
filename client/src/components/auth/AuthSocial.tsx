"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthSocial = () => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <div className="w-3/6">
        <Button className="flex w-full items-center">
          <FcGoogle />
          <span>Google</span>
        </Button>
      </div>
      <div className="w-3/6">
        <Button className="flex w-full items-center">
          <FaGithub />
          <span>Github</span>
        </Button>
      </div>
    </div>
  );
};

export default AuthSocial;
