import React from 'react'
import Loading from '@components/ui/Loading'
import { Layout } from 'antd'
import { useAuth } from '@auth/hooks/useAuth'
import { User } from '@auth/lib/types'

function AdminContainer(props: any) {
  const { state } = useAuth()

  const hasAllRequiredInformation =
    state.user && state.isClientUser
      ? Boolean(state.currentOrganisation) && state.assignedDataboard
      : true

  if (!hasAllRequiredInformation)
    return <Loading cover={'content'} message={'Loading...'} />

  return <Layout className={'min-h-screen'}>{props.children}</Layout>
}

export default AdminContainer
