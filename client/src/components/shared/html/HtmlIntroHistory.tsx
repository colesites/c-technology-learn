import React from 'react'
import TopicContainer from '../TopicContainer'
import { getSidebarMenuItemsAPI } from '@/app/api';

const HtmlIntroHistory = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer>
      {sidebarMenuItemData.html_intro}
    </TopicContainer>
  )
}

export default HtmlIntroHistory