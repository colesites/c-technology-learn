import DetailsSection from "@/components/DetailsSection";
import HeroSection from "@/components/HeroSection";
import React from "react";
import { fetchHomePageAPI, fetchNavAPI } from "@/app/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
}

const page = async () => {
  const [home_data, nav_data] = await Promise.all([
    fetchHomePageAPI(),
    fetchNavAPI(),
  ]);

  return (
    <section className="relative py-20 overflow-hidden">
      <HeroSection home_data={home_data} nav_data={nav_data} />
      <DetailsSection home_data={home_data} />
    </section>
  );
};

export default page;
