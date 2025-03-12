"use server"

import React from "react";
import TopicContainer from "../TopicContainer";
import { getSidebarMenuItemsAPI } from "@/app/api";

const Http = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer>
      {sidebarMenuItemData.http}
    </TopicContainer>
  );
};

export default Http;
