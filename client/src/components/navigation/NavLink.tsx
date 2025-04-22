"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = () => {
  const pathname = usePathname();

  const getLinkStyle = (path: string) => {
    return pathname === path
      ? "text-white font-medium"
      : "text-white hover:text-gray-300";
  };

  const renderLink = (path: string, text: string) => {
    const isActive = pathname === path;
    return (
      <div className="relative flex flex-col items-center">
        <Link href={path} className={getLinkStyle(path)}>
          {text}
        </Link>
        {isActive && (
          <div className="absolute -bottom-2">
            <Image src="/vector.png" alt="vector-image" width={50} height={20} />
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {renderLink("/", "Home")}
      {renderLink("/courses", "Courses")}
      {renderLink("/about", "About Us")}
    </>
  );
};

export default NavLink;
