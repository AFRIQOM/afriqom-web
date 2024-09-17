import { Organization, OrganizationBody, OrganizationDraft } from './types'
import { getImageUrl } from '@lib/images'

export const OrganizationToOrganizationDraft = (
  organisation: Organization
): OrganizationDraft => {
  return {
    email: organisation.email,
    name: organisation.name,
    about: organisation.about,
    logo: { image: getImageUrl(organisation.logo) },
    country: organisation.country
  }
}

export const OrganizationDraftToOrganizationBody = (
  organisation: OrganizationDraft
): OrganizationBody => {
  return {
    about: organisation.about,
    name: organisation.name,
    country: organisation.country,
    logo: organisation.logo.image ?? '',
    email: organisation.email,
    ...(organisation.status && { status: organisation.status })
  }
}
