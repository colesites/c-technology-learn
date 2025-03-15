"use server"

import React from "react";
import TopicContainer from "../TopicContainer";
import { getSidebarMenuItemsAPI } from "@/app/api";

const Http = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer lessonId={sidebarMenuItemData.http}>
      {sidebarMenuItemData.http}
    </TopicContainer>
  );
};

export default Http;
