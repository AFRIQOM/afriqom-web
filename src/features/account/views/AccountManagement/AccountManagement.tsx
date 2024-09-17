import React, { useMemo } from 'react'
import { OrganizationRoutes } from '@features/account/views/AccountManagement/routes'
import OrganisationLayout from '@features/account/views/AccountManagement/components/OrganisationLayout'
import { useAuth } from '@auth/hooks/useAuth'
import { hasPermission } from '@lib/user-roles'
import { SetupRoutes } from '@components/core/setupRoutes'

function AccountManagement() {
  const { state } = useAuth()
  const routes = useMemo(() => {
    return OrganizationRoutes.filter((route) => {
      if (route.permissions) return hasPermission(state.user, route.permissions)
      return true
    })
  }, [state.user])
  const menuItems = useMemo(() => {
    return routes.filter((route) => {
      return route.isMenuItem
    })
  }, [routes])

  return (
    <OrganisationLayout menuItems={menuItems}>
      <SetupRoutes paths={routes} />
    </OrganisationLayout>
  )
}

export default AccountManagement
