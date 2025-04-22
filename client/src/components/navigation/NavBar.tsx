import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const NavBar = async () => {
  const session = await auth();

  return (
    <header>
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center gap-x-4">
          <Image src="/logo.png" alt="Logo" width={25} height={25} />
          <p>C Tech Learn</p>
        </div>
        <div className="flex gap-5 items-center">
          <NavLink />

          <div
            className={session ? "hidden" : "hidden md:flex gap-5 items-center"}
          >
            <Link href="/auth/sign-up">
              <button className="bg-white text-primary rounded-full w-20 h-10 p-2">
                Sign Up
              </button>
            </Link>
            <Link href="/auth/sign-in">
              <button className="bg-transparent text-white rounded-full w-20 h-10 p-2 border border-white">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
