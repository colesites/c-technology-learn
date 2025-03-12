import React from "react";
import { SignupForm } from "@/components/auth/SignupForm";
import { fetchAuthAPI, fetchNavAPI } from "@/app/api";

const page = async () => {
  const [auth_data, nav_data] = await Promise.all([fetchAuthAPI(), fetchNavAPI()]);

  return <SignupForm auth_data={auth_data} nav_data={nav_data} />;
};

export default page;
