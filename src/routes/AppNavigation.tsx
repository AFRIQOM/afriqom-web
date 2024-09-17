import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import AccountProfile from '@features/account/views/AccountProfile/accountProfile'
import { AuthRoutes } from '@features/account/views/AccountManagement/routes'
import { RouteComponent } from '@components/core/RouteComponent'
import { PublicRoute } from './components/PublicRoute'
import AccountManagement from '@features/account/views/AccountManagement/AccountManagement'
import { AppRoutes } from '@lib/appRoutes'

function AppNavigation() {
  return (
    <Routes>
      <Route
        path={'/*'}
        element={
          <PrivateRoute>
            <AccountManagement />
          </PrivateRoute>
        }
      />
      {AuthRoutes.map((route, index) => {
        return (
          <Route
            key={route.path + index}
            path={route.path}
            element={
              <PublicRoute>
                <RouteComponent component={route.component} />
              </PublicRoute>
            }
          />
        )
      })}
    </Routes>
  )
}

export default AppNavigation
