import { useGetApi } from '@hooks/useApi'
import {
  RegionCountry,
  UserAssignedDataboard
} from '@features/databoard/lib/types'

type Props = {
  params?: Partial<UserAssignedDataboard>
  enabled?: boolean
}
export const useGetUserAssignedDatabaord = (props?: Props) => {
  const { params, enabled = true } = props ?? {}
  return useGetApi<UserAssignedDataboard[], Partial<UserAssignedDataboard>>({
    model: 'user_databoards',
    enabled,
    method: 'list',
    params
  })
}
