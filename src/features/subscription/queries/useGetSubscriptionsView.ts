import { useGetApi } from '@hooks/useApi'
import {
  Subscription,
  SubscriptionParams,
  SubscriptionView
} from '@features/subscription/lib/types'

type Props = {
  params?: SubscriptionParams
  enabled?: boolean
}
export const useGetSubscriptionsView = ({
  params,
  enabled = true
}: Props = {}) => {
  return useGetApi<SubscriptionView[]>({
    method: 'list',
    model: 'vw_subscriptions',
    params,
    enabled
  })
}
