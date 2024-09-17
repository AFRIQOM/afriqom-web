import { useAuth } from '@auth/hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'

export function PublicRoute(props: any) {
  const {
    state: { isLoggedIn }
  } = useAuth()
  return isLoggedIn ? <Navigate to={'/'} /> : props.children
}
