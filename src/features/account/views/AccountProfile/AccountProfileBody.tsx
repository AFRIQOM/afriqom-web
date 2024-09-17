import React, { useState } from 'react'
import AccountInfo from '@features/account/views/AccountSettings/components/AccountInfo'
import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import AccountSettings from '@features/account/views/AccountSettings/AccountSettings'
import AccountSubscriptions from '@features/account/views/AccountSubscriptions/AccountSubscriptions'
import AccountUsers from '@features/account/views/AccountUsers/AccountUsers'
import { Organization } from '@features/organization/lib/types'

type Props = {
  currentOrganisation: Organization
}
function AccountProfileBody({ currentOrganisation }: Props) {
  const [activeTab, setActiveTab] = useState('1')

  const handleTabChange = (title: string) => {
    setActiveTab(title)
  }

  return (
    <div>
      <AccountInfo />
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane
          tab={
            <span
              className={
                activeTab === '1' ? 'text-[#2BA94C]' : 'text-content-default'
              }
            >
              General
            </span>
          }
          key="1"
        >
          <AccountSettings />
        </TabPane>
        <TabPane
          tab={
            <span
              className={
                activeTab === '2' ? 'text-[#2BA94C]' : 'text-content-default'
              }
            >
              Subscriptions
            </span>
          }
          key="2"
        >
          <AccountSubscriptions currentOrganisation={currentOrganisation} />
        </TabPane>
        <TabPane
          tab={
            <span
              className={
                activeTab === '3' ? 'text-[#2BA94C]' : 'text-content-default'
              }
            >
              Users
            </span>
          }
          key="3"
        >
          <AccountUsers />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default AccountProfileBody
