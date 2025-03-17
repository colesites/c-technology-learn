"use server";

import React from "react";
import { getSidebarMenuItemsAPI } from "@/app/api";
import TopicContainer from "../TopicContainer";

const Http = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return <TopicContainer>{sidebarMenuItemData.http}</TopicContainer>;
};

export default Http;
