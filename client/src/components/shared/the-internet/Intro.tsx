import { getSidebarMenuItemsAPI } from "@/app/api";
import React from "react";
import TopicContainer from "../TopicContainer";

const Intro = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer lessonId={sidebarMenuItemData.intro}>
      {sidebarMenuItemData.intro}
    </TopicContainer>
  );
};

export default Intro;
