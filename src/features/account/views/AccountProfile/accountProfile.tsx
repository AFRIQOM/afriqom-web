import { PageContainer } from '@components/ui/container'
import React from 'react'
import AccountProfileBody from '@features/account/views/AccountProfile/AccountProfileBody'
import { Organization } from '@features/organization/lib/types'

type Props = {
  isAdminAccess?: boolean
  currentOrganisation: Organization
}
const AccountProfile = ({
  isAdminAccess = false,
  currentOrganisation
}: Props) => {
  if (isAdminAccess)
    return <AccountProfileBody currentOrganisation={currentOrganisation} />
  return (
    <PageContainer title="My account">
      <div className="overflow-hidden bg-surface-secondary px-10  py-5 ">
        <AccountProfileBody currentOrganisation={currentOrganisation} />
      </div>
    </PageContainer>
  )
}

export default AccountProfile
