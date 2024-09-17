import { useAuth } from '@auth/hooks/useAuth'
import { useMemo } from 'react'
import { Databoard, OrganizationBoard } from '@features/databoard/lib/types'
import { useGetDataboards } from '../../databoard/queries/useGetDataboards'
import { useGetUsers } from '@features/account/queries/useGetUsers'
import { useGetSubscriptionsView } from '@features/subscription/queries/useGetSubscriptionsView'
import { Subscription } from '@features/subscription/lib/types'
import { getDashboardState } from '@features/databoard/lib/helper'

export const useOrganizationHandler = () => {
  const { state, actions } = useAuth()
  const {
    data: subscriptions,
    isLoading: loadingSubscriptions,
    refetch: refetchSubscription
  } = useGetSubscriptionsView({
    params: {
      organisation_id: state.currentOrganisation?.id
    }
  })

  const { databoards, isLoading } = useGetDataboards()

  const { data: users } = useGetUsers({
    enabled: Boolean(state.currentOrganisation?.id),
    params: {
      organisation_id: state.currentOrganisation?.id
    }
  })

  const fullAccess = useMemo(() => {
    if (!subscriptions || !databoards || !state.currentOrganisation)
      return undefined
    if (state.currentOrganisation.subscription !== 'Full Access')
      return undefined
    return subscriptions.find((el) => el.package === 'Full Access')
  }, [databoards, state.currentOrganisation, subscriptions])

  const organizationBoards = useMemo<OrganizationBoard[]>(() => {
    if (!subscriptions || !databoards || !state.currentOrganisation) return []

    return databoards
      .map((el: Databoard) => {
        const subscriptionBoards = subscriptions.find(
          (board) => board.databoard_id === el.id
        )

        return {
          ...el,
          ...subscriptionBoards,
          ...(fullAccess && {
            license: fullAccess.license,
            status: fullAccess.status,
            package: fullAccess.package
          }),
          ...(subscriptionBoards && {
            //dont show 'approval request' status to client user
            status: actions.mapAuthStatus(subscriptionBoards.status)
          }),
          expiry_date:
            fullAccess?.expiry_date ?? subscriptionBoards?.expiry_date,
          country: el.country,
          databoard_id: el.id
        }
      })
      .sort((a, b) => {
        const aMeta = getDashboardState(a)
        const bMeta = getDashboardState(b)

        if (aMeta.hasSubscription !== bMeta.hasSubscription)
          return aMeta.hasSubscription ? -1 : 1

        if (aMeta.isNewActive !== bMeta.isNewActive)
          return aMeta.isNewActive ? -1 : 1
        if (aMeta.isActive !== bMeta.isActive) return aMeta.isActive ? -1 : 1
        if (aMeta.isPending !== bMeta.isPending) return aMeta.isPending ? -1 : 1

        return aMeta.isActive ? -1 : 1
      })
  }, [
    subscriptions,
    databoards,
    state.currentOrganisation,
    fullAccess,
    actions
  ])

  const isFullAccess = state.currentOrganisation?.subscription === 'Full Access'

  const subscriptionBoards = useMemo(() => {
    return organizationBoards.filter((el): el is Databoard & Subscription => {
      const { isActive } = getDashboardState(el)
      return isActive
    })
  }, [organizationBoards])

  const accessibleDataboards = useMemo(() => {
    return state.user.account_type == 'Administrator'
      ? organizationBoards
      : organizationBoards.filter((board) =>
          state.assignedDataboard?.some(
            (el) => el.databoard_id == board.databoard_id
          )
        )
  }, [organizationBoards, state.assignedDataboard, state.user.account_type])

  return {
    fullAccess,
    refetchSubscription,
    accessibleDataboards,
    organizationBoards,
    subscriptions,
    subscriptionBoards,
    databoards,
    isFullAccess,
    users: users ?? [],
    isLoading: isLoading || loadingSubscriptions
  }
}
