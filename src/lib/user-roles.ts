export const UserRoles = {
  SuperAdministrator: 'Super Administrator',
  SalesAdministrator: 'Sales Administrator',
  DataAdministrator: 'Data Administrator',
  ClientAdministrator: 'Administrator',
  ClientUsers: 'User'
} as const

export type RoleT = (typeof UserRoles)[keyof typeof UserRoles]

export type PermissionAccess =
  | 'canViewAll'
  | 'canReadDataboard'
  | 'canEditDataboard'
  | 'canEditAccountUserStatus'
  | 'canEditAccountSubscriptionStatus'
  | 'canEditAccountSubscription'
  | 'canAddAccountSubscription'
  | 'canApprovedUserStatus'
  | 'canApprovedAccountSubscription'
  | 'canAddAccountUser'
  | 'canEditAccountUser'
  | 'canEditAccountSubscriptionDashboardUlr'
  | 'canManageDataboard'
  | 'canViewAccountsSubscrptions'
  | 'canViewAccountList'
  | 'canAccessMyAccountProfil'
  | 'canAccessAccountDashboard'
  | 'canAccessAllAccountDataboard'
  | 'canAddDataboard'
  | 'canAddSubscription'
  | 'canApproveAccountUsers'
  | 'canApproveAccountSubscription'
  | 'canViewAccountSubscriptionAnnualCost'
  | 'canAccessAdminPanel'
  | 'canAccessAccountPanel'
  | 'canAccessSubscriptionRequest'
  | 'canAccessAdminUsers'
  | 'canExtendSubscription'
  | 'canApproveOrganisation'
  | 'canViewAccountDetails'
  | 'canEditFullAccess'
  | 'canEditAccountProfile'
  | 'canViewAccountPaidRateForSubscription'
  | 'canCancelSubscription'

const PermissionsRoleMap: Record<PermissionAccess, RoleT[]> = {
  canViewAll: [UserRoles.SuperAdministrator],
  canReadDataboard: [
    UserRoles.SuperAdministrator,
    UserRoles.SalesAdministrator,
    UserRoles.DataAdministrator
  ],
  canEditDataboard: [UserRoles.SuperAdministrator, UserRoles.DataAdministrator],
  canEditAccountUserStatus: [
    UserRoles.SuperAdministrator,
    UserRoles.SalesAdministrator
  ],

  canEditAccountSubscriptionStatus: [
    UserRoles.SuperAdministrator,
    UserRoles.SalesAdministrator
  ],
  canAddAccountSubscription: [
    UserRoles.SuperAdministrator,
    UserRoles.ClientAdministrator
  ],
  canEditAccountSubscription: [
    UserRoles.SuperAdministrator,
    UserRoles.SalesAdministrator
  ],
  canApprovedUserStatus: [UserRoles.SuperAdministrator],
  canApprovedAccountSubscription: [UserRoles.SuperAdministrator],
  canAddAccountUser: [
    UserRoles.SuperAdministrator,
    UserRoles.ClientAdministrator,
    UserRoles.SalesAdministrator
  ],
  canEditAccountUser: [
    UserRoles.SuperAdministrator,
    UserRoles.SalesAdministrator,
    UserRoles.ClientAdministrator
  ],
  canEditAccountSubscriptionDashboardUlr: [
    UserRoles.SuperAdministrator,
    UserRoles.DataAdministrator
  ],
  canExtendSubscription: [UserRoles.ClientAdministrator],
  canApproveOrganisation: [UserRoles.SuperAdministrator],
  canManageDataboard: [
    UserRoles.SuperAdministrator,
    UserRoles.DataAdministrator
  ],
  canViewAccountsSubscrptions: [
    UserRoles.SuperAdministrator,
    UserRoles.DataAdministrator
  ],
  canViewAccountList: [
    UserRoles.SuperAdministrator,
    UserRoles.SalesAdministrator
  ],
  canAccessMyAccountProfil: [
    UserRoles.SuperAdministrator,
    UserRoles.ClientAdministrator,
    UserRoles.ClientUsers
  ],
  canAccessAccountDashboard: [
    UserRoles.ClientAdministrator,
    UserRoles.ClientUsers
  ],
  canAccessAllAccountDataboard: [
    UserRoles.SuperAdministrator,
    UserRoles.ClientAdministrator
  ],
  canAddDataboard: [UserRoles.SuperAdministrator, UserRoles.DataAdministrator],
  canAddSubscription: [UserRoles.SuperAdministrator],
  canApproveAccountUsers: [UserRoles.SuperAdministrator],
  canApproveAccountSubscription: [UserRoles.SuperAdministrator],
  canViewAccountSubscriptionAnnualCost: [
    UserRoles.SuperAdministrator,
    UserRoles.SalesAdministrator
  ],
  canAccessAdminPanel: [
    UserRoles.SuperAdministrator,
    UserRoles.DataAdministrator,
    UserRoles.SalesAdministrator
  ],
  canAccessAccountPanel: [UserRoles.ClientAdministrator],
  canAccessSubscriptionRequest: [
    UserRoles.SuperAdministrator,
    UserRoles.SalesAdministrator
  ],
  canAccessAdminUsers: [UserRoles.SuperAdministrator],
  canViewAccountDetails: [
    UserRoles.SuperAdministrator,
    UserRoles.DataAdministrator,
    UserRoles.SalesAdministrator
  ],
  canEditFullAccess: [
    UserRoles.SuperAdministrator,
    UserRoles.DataAdministrator
  ],
  canEditAccountProfile: [
    UserRoles.SuperAdministrator,
    UserRoles.ClientAdministrator
  ],
  canViewAccountPaidRateForSubscription: [
    UserRoles.SuperAdministrator,
    UserRoles.SalesAdministrator,
    UserRoles.ClientAdministrator
  ],
  canCancelSubscription: [
    UserRoles.SuperAdministrator,
    UserRoles.ClientAdministrator
  ]
}

export const hasPermission = (
  roleData: { account_type: RoleT },
  permission?: PermissionAccess[] | PermissionAccess
): boolean => {
  if (!permission) return true
  return Array.isArray(permission)
    ? permission.some((access) =>
        PermissionsRoleMap[access].includes(roleData.account_type)
      )
    : PermissionsRoleMap[permission].includes(roleData.account_type)
}
