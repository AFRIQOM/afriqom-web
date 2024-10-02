import React, { useEffect, useMemo, useState } from 'react'
import { OrganizationRoutes } from '@features/account/views/AccountManagement/routes'
import OrganisationLayout from '@features/account/views/AccountManagement/components/OrganisationLayout'
import { useAuth } from '@auth/hooks/useAuth'
import { hasPermission } from '@lib/user-roles'
import { SetupRoutes } from '@components/core/setupRoutes'
import { addListener, launch, removeListener } from 'devtools-detector'
import { alignProperty } from '@mui/material/styles/cssUtils'

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

  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false)
  useEffect(() => {
    const lister = function (isOpen: boolean) {
      setIsDevToolsOpen(isOpen)
    }
    addListener(lister)
    launch()
    return () => {
      removeListener(lister)
    }
  }, [])

  if (isDevToolsOpen)
    return (
      <div className="h-screen w-screen flex justify-center items-center flex-col  p-4">
        <h2 className="text-xl font-bold">Something went wrong.</h2>
        <p className="text-center py-3">
          For security reasons, the application has been temporarily disabled.
          <br/>Please refresh the page or contact support for further assistance.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-700 text-white rounded-md cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    )

  return (
    <OrganisationLayout menuItems={menuItems}>
      <SetupRoutes paths={routes} />
    </OrganisationLayout>
  )
}

export default AccountManagement
