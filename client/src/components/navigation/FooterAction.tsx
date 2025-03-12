"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const FooterAction = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <h3 className="text-white !text-lg font-semibold mb-4">
        Join the community
      </h3>
      <h2 className="!mb-10">
        Are You Ready to Make a Difference? <br /> Join C Tech Learn Community
        now.
      </h2>
      <Button>
        <Link href="https://chat.whatsapp.com/F9QPZuDZDmR4xXYMARe7d7">Join the community</Link>
      </Button>
    </div>
  );
};

export default FooterAction;
