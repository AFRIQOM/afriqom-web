import { api, endpoints } from '@lib/api'
import { LoginResponse } from '@auth/lib/types'

export const authService = {
  login: (loginBody: { email: string; password: string }) =>
    api.post<LoginResponse>(endpoints.auth, loginBody, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
}
