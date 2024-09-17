import { useGetApi } from '@hooks/useApi'
import { UsersParams } from '@features/account/lib/type'
import { User } from '@auth/lib/types'

type Props = {
  params?: UsersParams
  enabled?: any
}
export const useGetUsers = ({ params, enabled = true }: Props = {}) => {
  return useGetApi<User[]>({
    method: 'list',
    model: 'users',
    params,
    enabled
  })
}
