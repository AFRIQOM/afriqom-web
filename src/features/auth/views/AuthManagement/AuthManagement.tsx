import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'
import { RouteComponent } from '@components/core/RouteComponent'
import { AuthRoutes } from '@features/account/views/AccountManagement/routes'

function AuthManagement() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Navigate replace to={AppRoutes.login} />} />
        {AuthRoutes.map((route, index) => {
          return (
            <Route
              key={route.path + index}
              path={route.path}
              element={<RouteComponent component={route.component} />}
            />
          )
        })}
      </Routes>
    </>
  )
}

export default AuthManagement
