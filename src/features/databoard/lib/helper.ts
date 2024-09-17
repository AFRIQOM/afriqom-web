import { OrganizationBoard } from '@features/databoard/lib/types'

export const getDashboardState = (dashboardData: OrganizationBoard) => {
  let hasExpired = false
  if (dashboardData.expiry_date) {
    const expiryDate = new Date(dashboardData.expiry_date)
    const currentDate = new Date()
    hasExpired = expiryDate.getTime() < currentDate.getTime()
  }

  const hasSubscription = Boolean(dashboardData.license)

  const isKnew = dashboardData.newly_launched.toLocaleLowerCase() == 'yes'
  const isPending = dashboardData.status == 'pending'
  const isActive = !hasExpired && !isPending && hasSubscription

  return {
    isNewActive: isKnew && isActive && !isPending,
    isKnew,
    isPending,
    isActive,
    hasExpired,
    hasSubscription
  }
}
