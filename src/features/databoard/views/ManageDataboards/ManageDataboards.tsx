'use client'
import { PageContainer } from '@components/ui/container'
import { useState } from 'react'
import TabPane from 'antd/es/tabs/TabPane'
import IndividualAccess from '../components/IndividualAccess'
import FullAccess from '../components/FullAcces'
import { Tabs } from 'antd'

export default function ManageDataboards() {
  const [activeTab, setActiveTab] = useState('1')

  const handleTabChange = (title: string) => {
    setActiveTab(title)
  }
  return (
    <PageContainer title="Manage Databoards">
      <div className="px-2  pb-2 overflow-hidden ">
        <Tabs activeKey={activeTab} onChange={handleTabChange}>
          <TabPane
            tab={
              <span
                className={
                  activeTab === '1' ? 'text-[#2BA94C]' : 'text-content-default'
                }
              >
                Individual Access
              </span>
            }
            key="1"
          >
            <IndividualAccess />
          </TabPane>
          <TabPane
            tab={
              <span
                className={
                  activeTab === '2' ? 'text-[#2BA94C]' : 'text-content-default'
                }
              >
                Full Access
              </span>
            }
            key="2"
          >
            <FullAccess />
          </TabPane>
        </Tabs>
      </div>
    </PageContainer>
  )
}
