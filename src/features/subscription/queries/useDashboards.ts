import { useGetApi } from '@hooks/useApi'
import { Databoard } from '@features/databoard/lib/types'

type Props = {
  enabled?: boolean
}
export const useGetDashboards = ({ enabled = true }: Props = {}) => {
  return useGetApi<Databoard[]>({
    method: 'list',
    model: 'databoards',
    enabled
  })
}
