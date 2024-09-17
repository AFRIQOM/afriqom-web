import { AppRoutes } from '@lib/appRoutes'
import WindowIcon from '@mui/icons-material/Window'
import React from 'react'
import { PermissionAccess } from './user-roles'

export type Country = {
  name: string
  demonym: string
  id: string
}

export type AppRoute = {
  prefix?: string
  label: string
  path: string
  icon: any
  component: any
  isMenuItem?: boolean
  permissions?: PermissionAccess[]
}
