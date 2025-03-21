"use server"

import React from "react";
import TopicContainer from "../TopicContainer";
import { getSidebarMenuItemsAPI } from "@/app/api";

const HowTheInternetWorks = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer>
      {sidebarMenuItemData.how_internet_works}
    </TopicContainer>
  );
};

export default HowTheInternetWorks;
