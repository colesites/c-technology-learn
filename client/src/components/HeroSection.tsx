"use server";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { BorderBeam } from "./ui/border-beam";
import { auth } from "@/auth";

interface HomeData {
  hero_title: string;
  hero_description: string;
}

interface NavData {
  signup: string;
  signin: string;
}

const HeroSection = async ({ home_data, nav_data }: { home_data: HomeData; nav_data: NavData }) => {
  const session = await auth();

  return (
    <div className="flex items-center justify-center pt-20">
      <Spotlight />
      <MaxWidthWrapper>
        <div className="dis-flex-col justify-center items-center gap-y-4">
          <h1>{home_data.hero_title}</h1>
          <Image src="/vector.png" alt="vector-image" width={200} height={30} />
          <p className="text-center">{home_data.hero_description}</p>

          {session ? (
            <Link href="/courses">
              <button className="bg-white text-primary rounded-full w-22 h-10 p-2">
                Go to Courses
              </button>
            </Link>
          ) : (<div className="flex gap-x-4">
            <Link href="/auth/sign-up">
              <button className="bg-white text-primary rounded-full w-20 h-10 p-2">
                {nav_data.signup}
              </button>
            </Link>
            <Link href="/auth/sign-in">
              <button className="bg-transparent text-white rounded-full w-20 h-10 p-2 border border-white">
                {nav_data.signin}
              </button>
            </Link>
          </div>)}
        </div>

        <div className="relative flex w-fit mt-20 justify-center shadow-white/10 shadow-sm rounded-2xl mx-auto z-20 overflow-hidden">
          <Image
            src="/course-dashboard.png"
            alt="Dashboard Image"
            width={800}
            height={400}
            quality={100}
          />
          <BorderBeam className="rounded-2xl" size={250} duration={12} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
