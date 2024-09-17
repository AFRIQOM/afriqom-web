import { SubscriptionType } from '@features/subscription/lib/types'
import { PickedImageList } from '@lib/images'
import { AppStatus } from '@lib/status'

export type OrganisationTableType = {
  name: string
  email: string
  operationCountry: string
  subscriptionType: string
}

export type Organization = {
  id: string
  name: string
  email: string
  country: string
  industry: string
  about: string
  logo: string
  subscription: SubscriptionType
  status: AppStatus
}

export type OrganizationDraft = {
  logo: PickedImageList[0]
  country: string
  name: string
  email: string
  about: string
  status?: Organization['status']
}

export type OrganizationBody = Omit<OrganizationDraft, 'logo'> & {
  logo: string
}

export type OrganizationsParams = {
  id?: string
  status?: AppStatus
}
