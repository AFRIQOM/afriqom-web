import { AppRoutes } from '@lib/appRoutes'
import WindowIcon from '@mui/icons-material/Window'
import React from 'react'
import { AppRoute } from '@lib/types'
import { MdDashboard, MdHome, MdPeople, MdRequestPage } from 'react-icons/md'
import { TbBriefcase } from 'react-icons/tb'
import { FaBuilding } from 'react-icons/fa'

export const OrganizationRoutes: AppRoute[] = [
  {
    label: 'Home',
    path: AppRoutes.dashboard,
    icon: MdHome,
    permissions: ['canAccessAccountDashboard'],
    isMenuItem: true,
    component: React.lazy(
      () =>
        import(
          '@features/databoard/views/DashboadrdManagement/DashboardManagement'
        )
    )
  },
  {
    label: 'My account',
    path: AppRoutes.account,
    icon: TbBriefcase,
    permissions: ['canAccessAccountPanel'],
    isMenuItem: true,
    component: React.lazy(
      () => import('@features/account/views/AccountProfile/accountProfile')
    )
  },
  {
    label: 'Organisation',
    path: AppRoutes.manageOrganisations,
    icon: FaBuilding,
    permissions: ['canAccessAdminPanel'],
    isMenuItem: true,
    component: React.lazy(
      () =>
        import(
          '@features/organization/views/ManageOrganizations/ManageOrganizations'
        )
    )
  },
  {
    permissions: ['canViewAccountDetails'],
    label: '',
    path: AppRoutes.previewOrganization,
    icon: WindowIcon,
    component: React.lazy(
      () =>
        import(
          '@features/organization/views/OrganizationPreview/PreviewOrganization'
        )
    )
  },
  {
    label: 'Databoards',
    path: AppRoutes.manageSubscriptions,
    icon: MdDashboard,
    permissions: ['canReadDataboard'],
    isMenuItem: true,
    component: React.lazy(
      () =>
        import('@features/databoard/views/ManageDataboards/ManageDataboards')
    )
  },
  {
    label: 'Subscription Requests',
    path: AppRoutes.subscriptionRequest,
    icon: MdRequestPage,
    permissions: ['canAccessSubscriptionRequest'],
    isMenuItem: true,
    component: React.lazy(
      () =>
        import('@features/subscription/views/SubscriptiomRequest/ManageRequest')
    )
  },
  {
    label: 'System Users',
    path: AppRoutes.users,
    icon: MdPeople,
    permissions: ['canAccessAdminUsers'],
    isMenuItem: true,
    component: React.lazy(
      () => import('@features/users/views/ManageUsers/ManageUsers')
    )
  },
  {
    label: '',
    path: AppRoutes.preview,
    icon: WindowIcon,
    component: React.lazy(
      () =>
        import('@features/databoard/views/PreviewDashboard/PreviewDashboard')
    )
  },
  {
    label: '',
    path: AppRoutes.buySubscription,
    icon: WindowIcon,
    component: React.lazy(
      () =>
        import('@features/subscription/views/BuySubscription/BuySubscription')
    )
  }
]

export const AuthRoutes: AppRoute[] = [
  {
    label: '',
    path: AppRoutes.register,
    icon: WindowIcon,
    component: React.lazy(() => import('@auth/views/registration/Register'))
  },
  {
    label: '',
    path: AppRoutes.welcome,
    icon: WindowIcon,
    component: React.lazy(() => import('@auth/views/Onboarding/Onboarding'))
  },
  {
    label: '',
    path: AppRoutes.login,
    icon: WindowIcon,
    component: React.lazy(() => import('@auth/views/Login/Login'))
  },
  {
    label: '',
    path: AppRoutes.forgotPassword,
    icon: WindowIcon,
    component: React.lazy(
      () => import('@auth/views/ForgotPassword/ForgotPassword')
    )
  }
]
