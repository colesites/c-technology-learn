"use server"

import React from "react";
import TopicContainer from "../TopicContainer";
import { getSidebarMenuItemsAPI } from "@/app/api";

const Https = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer lessonId={sidebarMenuItemData.https}>
      {sidebarMenuItemData.https}
    </TopicContainer>
  );
};

export default Https;
