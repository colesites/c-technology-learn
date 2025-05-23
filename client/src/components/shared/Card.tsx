import { cn } from "@/lib/utils";
import React from "react";

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn("block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]", className)}
      style={{ backgroundImage: `url(/card.svg)` }}
    >
      <div className="relative z-2 dis-flex-col min-h-auto p-[2.4rem]">
        {children}
      </div>
    </div>
  );
};

export default Card;
