import React from 'react'
import TopicContainer from '../TopicContainer'
import { getSidebarMenuItemsAPI } from '@/app/api';

const DomainName = async () => {
  const sidebarMenuItemData = await getSidebarMenuItemsAPI();

  return (
    <TopicContainer>
      {sidebarMenuItemData.domain_name}
    </TopicContainer>
  )
}

export default DomainName