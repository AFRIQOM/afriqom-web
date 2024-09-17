import { Subscription } from '@features/subscription/lib/types'
import { AppStatus } from '@lib/status'

export type BaseDataboard = {
  id: string
  country: string
  standard_rate: string
  standard_light_databoard_url: string
  standard_dark_databoard_url: string
  advanced_rate: string
  advanced_light_databoard_url: string
  advanced_dark_databoard_url: string
  premium_rate: string
  premium_light_databoard_url: string
  premium_dark_databoard_url: string
  last_updated: string
  newly_launched: string
  tags: string
  date_created: string
  created_by_id: string
}

export type Databoard = BaseDataboard & {
  country_name: string
}

export type RegionDataborad = {
  id: string
  name: string
  standard_rate: string
  advanced_rate: string
  premium_rate: string
  status: AppStatus
}

export type OrganizationBoard = Partial<Subscription> &
  Databoard & {
    databoard_id: string
  }

export type sector = {
  name: string
}

export interface DataboardDraft {
  country_id: string
  standard_subscription_rate: number
  light_mode_s: string
  dark_mode_s: string
  advance_subscription_rate: number
  light_mode_a: string
  dark_mode_a: string
  premium_subscription_rate: number
  light_mode_p: string
  dark_mode_p: string
  last_updated: any
  new_country: string
  tags: string[]
}

export type DataboardBody = {
  country: string
  standard_rate: number
  standard_light_databoard_url: string
  standard_dark_databoard_url: string
  advanced_rate: number
  advanced_light_databoard_url: string
  advanced_dark_databoard_url: string
  premium_rate: number
  premium_light_databoard_url: string
  premium_dark_databoard_url: string
  last_updated: any
  newly_launched: string
  created_by_id: string
  tags: string
}

export interface RegionDataboradBody {
  name: string
  standard_rate: string
  advanced_rate: string
  premium_rate: string
  created_by_id: string
}
export interface RegionDataboradDraft {
  name: string
  standard_rate: string
  advanced_rate: string
  premium_rate: string
}

export type RegionCountry = {
  id: string
  region_id: string
  region_name: string
  databoard_id: string
  country: string
  tags: string
}

export type UserAssignedDataboard = {
  id: string
  databoard_id: string
  user_id: string
  status: AppStatus
}
