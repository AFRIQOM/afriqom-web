import {
  AccountBody,
  AccountFormDraft,
  SignInBody,
  SignInDraft,
  User,
  UserBody,
  UserDraft
} from './types'
import CryptoJS from 'crypto-js'

export const UserDraftToUserBody = (
  user: UserDraft,
  metadata: { organisation_id?: string; access_portal: User['access_portal'] }
): UserBody => {
  return {
    full_name: user.first_name + ' ' + user.last_name,
    access_portal: metadata?.access_portal,
    email: user.email.toLowerCase(),
    whatsapp_number: user.whatsapp_number,
    phone_number: user.phone_number,
    account_type: user.account_type,
    access_country_restriction: Array.isArray(user.access_country_restriction)
      ? user.access_country_restriction.join(',')
      : user.access_country_restriction,
    organisation_id: metadata?.organisation_id,
    databoards: user.databoards ? user.databoards.join(',') : '',
    username: user.email,
    ...(user.password && { password: CryptoJS.MD5(user.password).toString() }),
    status: user.status ?? 'pending'
  }
}

export const UserToUserDraft = (
  user?: User,
  meta?: { databoards: string[] }
): Partial<UserDraft> => {
  return {
    first_name: user?.full_name.split(' ')[0],
    last_name: user?.full_name.split(' ')[1],
    email: user?.email,
    phone_number: user?.phone_number,
    whatsapp_number: user?.whatsapp_number,
    account_type: user?.account_type,
    access_country_restriction: user?.access_country_restriction
      ? user.access_country_restriction.split(',')
      : [],
    username: user?.email,
    databoards: meta?.databoards ?? [],
    password: '',
    status: user?.status
  }
}

export const AccountToAccountBody = (
  account: AccountFormDraft
): AccountBody => {
  return {
    organisation: {
      name: account.company_name,
      email: account.email,
      country: account.country_id,
      industry: account.company_position,
      about: '',
      subscription: 'Individual Access'
    },
    user: {
      full_name: account.name,
      email: account.email,
      phone_number: account.phone_number,
      whatsapp_number: account.phone_number,
      password: CryptoJS.MD5(account.password).toString()
    }
  }
}

export const SignInDraftToSignInbody = (account: SignInDraft): SignInBody => {
  return {
    username: account.username,
    password: account.password
  }
}
