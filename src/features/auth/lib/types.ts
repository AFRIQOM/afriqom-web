import { Organization } from '@features/organization/lib/types'
import { RoleT } from '@lib/user-roles'

export interface LoginResponse {
  user: User
  currentOrganization?: Organization
  loginMetaData: {
    info: {
      id: string
      username: string
      email: string
      created_date: string
      status: string
    }[]
    token: string
    ip: string
    user_agent: string
    role_id: string
    role: Role
    login_timestamp: string
    type: number
  }
}

export interface User {
  id: string
  full_name: string
  email: string
  phone_number: string
  whatsapp_number: string
  access_country_restriction: string
  account_type: RoleT
  main_contact: string
  light_preference: string
  organisation_id: string
  username: string
  password: string
  status: 'active' | 'inactive' | 'approval request' | 'deleted' | 'pending'
  access_portal: 'backend' | 'client'
  user_agent: string
  ip_address: string
  x_forwarded_for_ip_address: any
  last_login_date: string
  created_date: string
  auth_token: any
  yubico_auth: any
}

export interface Role {
  'api.primary.blobs': string
  'api.primary.databoards': string
  'api.primary.organisations': string
  'api.primary.sessions': string
  'api.primary.subscriptions': string
  'api.primary.user_subscriptions': string
  'api.primary.users': string
  'api.users.permissions': string
  'api.users.roles': string
  'api.users.user_roles_lookup': string
  'api.users.vw_permissions': string
  'api.roles.permissions': string
  'api.roles.preferences': string
  'api.roles.roles': string
  'api.roles.vw_permissions': string
  'api.users.preferences': string
  'api.ext.generate.Hash': string
  'api.ext.generate.Pin': string
  'api.ext.push.AdvancedEmail': string
  'api.ext.push.Email': string
  'api.ext.push.SMS': string
}

export interface UserFormBody {
  full_name: string
  email: string
  phone_number: string
  whatsapp_number: string
  access_country_restriction: string
  account_type: 'Administrator'
  status: string
}

export interface UserDraft {
  first_name: string
  last_name: string
  email: string
  phone_number: string
  whatsapp_number: string
  account_type: RoleT
  access_country_restriction?: any
  databoards: string[]
  username: string
  password: string
  status: 'active' | 'inactive' | 'approval request' | 'deleted' | 'pending'
}

export type UserBody = Omit<
  UserDraft,
  'first_name' | 'last_name' | 'password' | 'databoards'
> & {
  organisation_id?: string
  full_name: string
  password?: string
  databoards: string
  access_portal: User['access_portal']
}

export interface AccountFormDraft {
  name: string
  email: string
  phone_number: string
  password: string
  confirm_password: string
  company_name: string
  company_position: string
  country_id: string
}

export type AccountBody = {
  organisation: {
    name: string
    email: string
    country: string
    industry: string
    about: string
    subscription: string
  }
  user: {
    full_name: string
    email: string
    phone_number: string
    whatsapp_number: string
    password: string
  }
}

export interface SignInDraft {
  username: string
  password: string
}

export type SignInBody = {
  username: string
  password: string
}
