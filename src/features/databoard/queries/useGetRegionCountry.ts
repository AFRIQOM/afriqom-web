import { useGetApi } from '@hooks/useApi'
import { Databoard, RegionCountry } from '@features/databoard/lib/types'

export const useGetRegionCountry = () => {
  return useGetApi<RegionCountry[]>({
    model: 'vw_region_databoards',
    method: 'list'
  })
}
