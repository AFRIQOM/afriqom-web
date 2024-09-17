import { SubscriptionLicenseType } from '@features/subscription/lib/types'

export const SUBSCRIPTION_RATE_KEY: Record<
  SubscriptionLicenseType,
  'premium_rate' | 'standard_rate' | 'advanced_rate'
> = {
  Premium: 'premium_rate',
  Standard: 'standard_rate',
  Advanced: 'advanced_rate',
  Custom: 'advanced_rate'
}

export const SubscriptionLicenseOptions: {
  label: string
  value: SubscriptionLicenseType
}[] = [
  { label: 'Premium', value: 'Premium' },
  { label: 'Standard', value: 'Standard' },
  { label: 'Advanced', value: 'Advanced' },
  { label: 'Custom', value: 'Custom' }
]
