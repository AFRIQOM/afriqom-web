import { useGetApi } from '@hooks/useApi'
import {
  Subscription,
  OrginisationParams
} from '@features/subscription/lib/types'

type Props = { params?: OrginisationParams; enabled?: boolean }
export const useGetUserSubscriptions = ({
  params,
  enabled = true
}: Props = {}) => {
  return useGetApi<Subscription[]>({
    method: 'list',
    model: 'user_subscriptions',
    params,
    enabled
  })
}
