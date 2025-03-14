import { getSidebarMenuItemsAPI } from "@/app/api";
import React from "react";
import TopicContainer from "../TopicContainer";

const Intro = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer>
      {sidebarMenuItemData.intro}
    </TopicContainer>
  );
};

export default Intro;
