import { User } from '@auth/lib/types'
import { AppStatus } from '@lib/status'

export type UsersParams = {
  id?: string
  organisation_id?: string
  account_type?: string
  access_portal?: User['access_portal']
  status?: AppStatus
}
