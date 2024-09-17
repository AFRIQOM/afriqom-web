import { api } from '@lib/api'
import { LoginResponse, SignInBody, User } from '@auth/lib/types'
import { Organization } from '@features/organization/lib/types'
import { ApiError } from '@lib/api/error'

export const authApi = {
  login: async (payload: SignInBody): Promise<LoginResponse> => {
    const loginResponse = await api.post<LoginResponse['loginMetaData']>(
      '',
      payload,
      {
        params: {
          f: `sessions:login`
        }
      }
    )
    if ((loginResponse as any).ERR) {
      throw new ApiError(
        (loginResponse as any).CODE,
        'Incorrect email or password'
      )
    }
    const users = await api.post<User[]>('', payload, {
      params: {
        f: `users:list`,
        token: loginResponse.token,
        id: loginResponse.info[0].id
      }
    })
    if ((users as any).ERR || users.length == 0) {
      throw new Error('Incorrect email or password')
    }
    let currentOrganization: Organization | undefined
    if (users[0].access_portal == 'client') {
      const organizations = await api.post<Organization[]>('', payload, {
        params: {
          f: `organisations:list`,
          token: loginResponse.token,
          id: users[0].organisation_id
        }
      })
      if ((organizations as any).ERR) {
        throw new Error('Incorrect email or password')
      }
      currentOrganization = organizations[0]
    }
    return {
      loginMetaData: loginResponse,
      user: users[0],
      currentOrganization
    }
  }
}
