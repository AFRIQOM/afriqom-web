import { useAuth } from '@auth/hooks/useAuth'
import { useUpdateOrganization } from '@features/account/hooks/useUpdateOrganizations'
import { hasPermission } from '@lib/user-roles'
import React, { useState } from 'react'
import { IoLocationSharp, IoPeopleSharp } from 'react-icons/io5'
import StatusDropDown from './StatusDropdown'
import { Organization } from '@features/organization/lib/types'
import StatusTag from '@components/ui/StatusTag'
import { useOrganizationHandler } from '@features/account/hooks/useOrganizationHandler'
import { getImageUrl } from '@lib/images'

function AccountInfo() {
  const { state, actions } = useAuth()
  const updateOrganization = useUpdateOrganization()
  const { subscriptionBoards, users } = useOrganizationHandler()
  const [status, setStatus] = useState(
    state.currentOrganisation?.status || 'pending'
  )
  const handleStatusUpdate = (status: Organization['status']) => {
    setStatus(status)
    if (
      state.currentOrganisation &&
      status !== state.currentOrganisation.status
    ) {
      updateOrganization.actions.updateOrganization(
        {
          id: state.currentOrganisation.id,
          body: {
            ...state.currentOrganisation,
            status
          }
        },
        {
          onSuccess() {
            actions.setCurrenOrganisation({
              ...state.currentOrganisation!,
              status
            })
          }
        }
      )
    }
  }
  return (
    <div className="flex items-center justify-between py-5 ">
      <div className="flex items-start gap-2 md:gap-6">
        <img
          src={
            getImageUrl(state.currentOrganisation?.logo) ??
            '/assets/default.jpeg'
          }
          alt=""
          className="mt-2 size-20 md:size-28 rounded-sm object-cover"
        />
        <div className="flex max-w-sm  flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center  gap-x-2">
            <p className="mb-0 text-xl sm:text-2xl font-bold text-content-default">
              {state.currentOrganisation?.name}
            </p>
            {hasPermission(state.user, 'canApproveOrganisation') && (
              <div className={'flex items-center'}>
                <StatusTag size={'md'} status={status} />
                <StatusDropDown
                  setStatus={(value) => handleStatusUpdate(value as any)}
                />
              </div>
            )}
          </div>
          <div className="line-clamp-3 max-w-[180px]  sm:max-w-md px-2  text-sm text-content-secondary">
            {state.currentOrganisation?.about}
          </div>
          <div className="mt-5 flex gap-4">
            <div className="grow-0  rounded-md border-content-default bg-surface-default px-3 sm:px-8 py-2 text-content-default">
              <div className="flex items-center justify-center gap-1 text-xs">
                <IoPeopleSharp />
                <span>{users.length}</span>
              </div>
              <span className="text-xs">Users</span>
            </div>
            <div className="grow-0 rounded-md border-content-default bg-surface-default px-1 sm:px-6 py-2 text-content-default">
              <div className="flex  items-center justify-center gap-1 text-xs ">
                <span>{subscriptionBoards.length}</span>
                <IoLocationSharp />
              </div>
              <span className="text-xs">Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
