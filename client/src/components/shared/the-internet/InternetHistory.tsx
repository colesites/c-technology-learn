import { getSidebarMenuItemsAPI } from "@/app/api";
import React from "react";
import TopicContainer from "../TopicContainer";

const InternetHistory = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer>
      {sidebarMenuItemData.the_internet_internet_history}
    </TopicContainer>
  );
};

export default InternetHistory;
