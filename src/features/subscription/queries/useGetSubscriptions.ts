import { useGetApi } from '@hooks/useApi'
import {
  Subscription,
  SubscriptionParams
} from '@features/subscription/lib/types'

type Props = {
  params?: SubscriptionParams
  enabled?: boolean
}
export const useGetSubscriptions = ({ params, enabled = true }: Props = {}) => {
  return useGetApi<Subscription[]>({
    method: 'list',
    model: 'subscriptions',
    params,
    enabled
  })
}
