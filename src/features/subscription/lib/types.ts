import { Dayjs } from 'dayjs'
import { AppStatus } from '@lib/status'

export type SubscriptionType = 'Individual Access' | 'Full Access'
export type SubscriptionLicenseType =
  | 'Standard'
  | 'Advanced'
  | 'Premium'
  | 'Custom'
export type SubscriptionStatus = AppStatus

export type Subscription = {
  id: string
  organisation_id: string
  databoard_id: string
  region_id: string
  license: SubscriptionLicenseType
  rate_paid: string
  start_date: string
  expiry_date: string
  custom_subscription_light_databoard_url?: any
  custom_subscription_dark_databoard_url?: any
  package: SubscriptionType
  status: SubscriptionStatus
}

export type SubscriptionParams = {
  id?: string
  organisation_id?: string
  status?: string
  'status:in'?: string
}

export type SubscriptionDraft = Pick<
  Subscription,
  | 'license'
  | 'custom_subscription_light_databoard_url'
  | 'custom_subscription_dark_databoard_url'
  | 'rate_paid'
  | 'status'
> & {
  databoard_id?: string
  start_date: Dayjs
  expiry_date: Dayjs
}

export type SubscriptionBody = Omit<
  SubscriptionDraft,
  'start_date' | 'expiry_date'
> &
  Pick<Subscription, 'organisation_id' | 'start_date' | 'expiry_date'> & {
    id?: string
    region_id?: string
    package: SubscriptionType
  }

export type OrginisationParams = {
  organisation_id?: string
}

export type SubscriptionView = Subscription & {
  organisation_name: string
  country: string
}

export type SubscriptionIndividualBody = {
  organisation_id: string
  package: SubscriptionType
  databoards: {
    databoard_id: string
    license: SubscriptionLicenseType
    rate_paid: string
    start_date: string
    expiry_date: string
  }[]
}

export type SubscriptionFullAccessBody = {
  organisation_id: string
  package: SubscriptionType
  region_id: string
  rate_paid: string
  license: SubscriptionLicenseType
  start_date: string
  expiry_date: string
}

export type CreateSubscriptionBody =
  | SubscriptionIndividualBody
  | SubscriptionFullAccessBody
