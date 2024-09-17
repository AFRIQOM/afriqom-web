import { PageContainer } from '@components/ui/container'
import React, { useEffect } from 'react'
import { IoArrowBackCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { Organization } from '@features/organization/lib/types'
import Loading from '@components/ui/Loading'
import AccountProfile from '@features/account/views/AccountProfile/accountProfile'
import { AppRoutes } from '@lib/appRoutes'
import { useGetOrganizations } from '@features/organization/queries/useGetOrganizations'
import { useAuth } from '@auth/hooks/useAuth'

function PreviewOrganization() {
  const navigate = useNavigate()
  const {
    actions: { setCurrenOrganisation, setCurrenOrganisationId },
    state: { currentOrganisation, currentOrganisationId }
  } = useAuth()
  const currentUrl = window.location.href
  const urlObj = new URL(currentUrl)
  const queryString = urlObj.search.slice(1)
  const { data: organizations, isLoading } = useGetOrganizations({
    params: { id: queryString }
  })

  useEffect(() => {
    if (
      organizations &&
      organizations[0] &&
      currentOrganisationId !== queryString
    ) {
      const organization: Organization = organizations[0]
      setCurrenOrganisationId(queryString)
      setCurrenOrganisation(organization)
    }
  }, [currentOrganisationId, organizations, queryString, setCurrenOrganisation])

  // this is needed to mount the component with the right data
  const canRenderView = !isLoading && currentOrganisationId === queryString

  return (
    <PageContainer
      title={
        organizations && organizations[0] ? (
          <div className="flex cursor-pointer items-center gap-3 ">
            <IoArrowBackCircle
              className="text-2xl hover:text-primary-default"
              onClick={() => {
                navigate(`${AppRoutes.manageOrganisations}`),
                  setCurrenOrganisation(undefined)
              }}
            />{' '}
            <span>{organizations[0].name}</span>
          </div>
        ) : null
      }
    >
      {(isLoading || !canRenderView) && <Loading />}
      {canRenderView && currentOrganisation && (
        <AccountProfile
          currentOrganisation={currentOrganisation}
          isAdminAccess={true}
        />
      )}
    </PageContainer>
  )
}

export default PreviewOrganization
