import { useGetApi } from '@hooks/useApi'
import { OrganizationsParams } from '@features/organization/lib/types'
import { Databoard, RegionDataborad } from '../lib/types'

type Props = {
  params?: OrganizationsParams
  enabled?: boolean
}
export const useGetRegionDataboards = ({
  params,
  enabled = true
}: Props = {}) => {
  return useGetApi<RegionDataborad[]>({
    method: 'list',
    model: 'regions',
    params,
    enabled
  })
}
