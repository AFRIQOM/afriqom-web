import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteComponent } from './RouteComponent'
import { AppRoute } from '@lib/types'

type Props = {
  baseUrl?: string
  paths: AppRoute[]
}

export function SetupRoutes({ paths, baseUrl = '' }: Props) {
  return (
    <Routes>
      <Route index element={<Navigate to={paths[0].path} />} />
      {paths.map((route, index) => {
        return (
          <Route
            key={route.path + index}
            path={`${route.path.replace(baseUrl ?? '', '')}${
              route.prefix || ''
            }`}
            element={<RouteComponent component={route.component} />}
          />
        )
      })}
    </Routes>
  )
}
