import React, { ReactNode } from 'react'
import { Layout } from 'antd'
import AdminContainer from './AdminContainer'
import AppHeader from '@components/shared/AppHeader'
import { AppRoute } from '@lib/types'

const { Content } = Layout
type Props = {
  menuItems: AppRoute[]
  children: ReactNode
}

function OrganizationLayout({ menuItems, children }: Props) {
  return (
    <AdminContainer>
      <div
        style={{ height: 60, zIndex: 1000 }}
        className={'fixed w-full h-full p-0'}
      >
        <AppHeader menuItems={menuItems} />
      </div>
      <Layout>
        <Layout>
          <Content
            style={{
              background: 'rgb(249, 249, 250)!important',
              minHeight: 'calc(100vh - 50px)'
            }}
            className="relative "
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </AdminContainer>
  )
}

export default OrganizationLayout
