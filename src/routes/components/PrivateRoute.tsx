import React, { PropsWithChildren } from 'react'
import { useAuth } from '@auth/hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'

export function PrivateRoute(props: PropsWithChildren) {
  const {
    state: { isLoggedIn }
  } = useAuth()
  if (!isLoggedIn) return <Navigate to={AppRoutes.login} replace />
  return <React.Fragment>{props.children}</React.Fragment>
}
