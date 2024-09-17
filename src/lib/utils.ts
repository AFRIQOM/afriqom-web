import { useMemo } from 'react'
import countryList from 'react-select-country-list'

export function isServer() {
  return typeof window === 'undefined'
}

const options = countryList().getData()

export const getCountryLabel = (countryCode?: string) => {
  const country = options.find((option: any) => option.value === countryCode)
  return country ? country.label : 'All Countries'
}

export function capitalizeFirstLetter(string: string) {
  if (!string) return string
  return string.charAt(0).toUpperCase() + string.slice(1)
}
