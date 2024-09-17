import { useGetApi } from '@hooks/useApi'
import {
  Organization,
  OrganizationsParams
} from '@features/organization/lib/types'

type Props = {
  params?: OrganizationsParams
  enabled?: boolean
}
export const useGetOrganizations = ({ params, enabled = true }: Props = {}) => {
  return useGetApi<Organization[]>({
    method: 'list',
    model: 'organisations',
    params,
    enabled
  })
}
