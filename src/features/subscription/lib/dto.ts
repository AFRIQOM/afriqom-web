import dayjs from 'dayjs'
import { Subscription, SubscriptionDraft, SubscriptionBody } from './types'

export const SubscriptionToSubscriptionDraft = (
  subscription: Subscription
): SubscriptionDraft => {
  return {
    status: subscription.status,
    databoard_id: subscription.databoard_id,
    rate_paid: subscription.rate_paid,
    start_date: dayjs(subscription.start_date),
    license: subscription.license,
    expiry_date: dayjs(subscription.expiry_date),
    custom_subscription_dark_databoard_url:
      subscription.custom_subscription_dark_databoard_url,
    custom_subscription_light_databoard_url:
      subscription.custom_subscription_light_databoard_url
  }
}

export const subscriptionDraftToBody = (
  subscription: SubscriptionDraft
): Omit<
  SubscriptionBody,
  'id' | 'region_id' | 'organisation_id' | 'package'
> => {
  return {
    status: subscription.status,
    databoard_id: subscription.databoard_id,
    rate_paid: subscription.rate_paid,
    start_date: dayjs(subscription.start_date).format('YYYY-MM-DD'),
    license: subscription.license,
    expiry_date: dayjs(subscription.expiry_date).format('YYYY-MM-DD'),
    custom_subscription_dark_databoard_url:
      subscription.custom_subscription_dark_databoard_url,
    custom_subscription_light_databoard_url:
      subscription.custom_subscription_light_databoard_url
  }
}
