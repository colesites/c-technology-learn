import React from "react";
import { SigninForm } from "@/components/auth/SigninForm";
import { fetchAuthAPI, fetchNavAPI } from "@/app/api";

const page = async () => {
  const [auth_data, nav_data] = await Promise.all([
    fetchAuthAPI(),
    fetchNavAPI(),
  ]);

  return <SigninForm auth_data={auth_data} nav_data={nav_data} />;
};

export default page;
