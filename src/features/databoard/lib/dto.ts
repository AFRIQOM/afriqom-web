import dayjs from 'dayjs'
import {
  Databoard,
  DataboardBody,
  DataboardDraft,
  RegionDataborad,
  RegionDataboradBody,
  RegionDataboradDraft
} from './types'

export const DataboardDraftToDataboardBody = (
  databoard: DataboardDraft,
  metadata: { created_by_id: string }
): DataboardBody => {
  return {
    country: databoard.country_id,
    advanced_dark_databoard_url: databoard.dark_mode_a,
    advanced_light_databoard_url: databoard.light_mode_s,
    advanced_rate: databoard.advance_subscription_rate,
    standard_dark_databoard_url: databoard.dark_mode_s,
    standard_light_databoard_url: databoard.light_mode_s,
    standard_rate: databoard.standard_subscription_rate,
    premium_dark_databoard_url: databoard.dark_mode_p,
    premium_light_databoard_url: databoard.light_mode_p,
    premium_rate: databoard.premium_subscription_rate,
    newly_launched: databoard.new_country,
    last_updated: dayjs(databoard.last_updated).format('YYYY-MM-DD HH:mm:ss'),
    created_by_id: metadata.created_by_id,
    tags: Array.isArray(databoard.tags)
      ? databoard.tags.join(', ')
      : databoard.tags || ''
  }
}

export const DataboardToDataboardDraft = (
  databord?: Databoard
): Partial<DataboardDraft> => {
  return {
    country_id: databord?.country,
    standard_subscription_rate: parseFloat(databord?.standard_rate!),
    advance_subscription_rate: parseFloat(databord?.advanced_rate!),
    premium_subscription_rate: parseFloat(databord?.premium_rate!),
    dark_mode_a: databord?.advanced_dark_databoard_url,
    light_mode_a: databord?.advanced_light_databoard_url,
    dark_mode_s: databord?.standard_dark_databoard_url,
    light_mode_s: databord?.standard_light_databoard_url,
    light_mode_p: databord?.premium_light_databoard_url,
    dark_mode_p: databord?.premium_dark_databoard_url,
    last_updated: dayjs(databord?.last_updated),
    new_country: databord?.newly_launched,
    tags: databord?.tags.split(',')
  }
}

export const RegionBoardDraftToRegionBoardBody = (
  regionBoard: RegionDataboradDraft,
  metadata: { created_by_id: string }
): RegionDataboradBody => {
  return {
    name: regionBoard.name,
    advanced_rate: regionBoard.advanced_rate,
    premium_rate: regionBoard.premium_rate,
    standard_rate: regionBoard.standard_rate,
    created_by_id: metadata.created_by_id
  }
}

export const RegionboardToRegionBoardDraft = (
  regionBoard?: RegionDataborad
): Partial<RegionDataboradDraft> => {
  return {
    name: regionBoard?.name,
    advanced_rate: regionBoard?.advanced_rate,
    premium_rate: regionBoard?.premium_rate,
    standard_rate: regionBoard?.standard_rate
  }
}
