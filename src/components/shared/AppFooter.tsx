import React from 'react'
import { useAuth } from '@auth/hooks/useAuth'

const AppFooter = () => {
  const { state } = useAuth()
  return (
    <div className="mt-6  flex items-center  justify-between bg-surface-secondary p-2 text-content-default">
      <span className="text-sm">Powered By Africa Analitica</span>
      {state.currentOrganisation && (
        <span className="text-sm">
          License: {state.currentOrganisation.subscription}
        </span>
      )}
    </div>
  )
}

export default AppFooter
