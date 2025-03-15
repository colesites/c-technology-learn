"use server"

import React from "react";
import TopicContainer from "../TopicContainer";
import { getSidebarMenuItemsAPI } from "@/app/api";

const HowTheInternetWorks = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer lessonId={sidebarMenuItemData.how_internet_works}>
      {sidebarMenuItemData.how_internet_works}
    </TopicContainer>
  );
};

export default HowTheInternetWorks;
