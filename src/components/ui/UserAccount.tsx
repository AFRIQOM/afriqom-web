import { useAuth } from '@auth/hooks/useAuth'
import { Avatar, Popover } from 'antd'
import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import UserDropdown from './UseDropDown'
import { getInitials } from './GetInitialProps'
import { getImageUrl } from '@lib/images'

function UserAccount() {
  const { state } = useAuth()
  return (
    <div className="flex items-center justify-center gap-3">
      <Avatar
        size={'large'}
        src={
          state.isClientUser
            ? getImageUrl(state.currentOrganisation?.logo)
            : undefined
        }
      >
        {getInitials(
          (state.isClientUser
            ? state.currentOrganisation?.name
            : state.user.full_name) || ''
        )}
      </Avatar>
      <div>
        <p className="m-0 p-0 font-bold">
          {state.isClientUser
            ? state.currentOrganisation?.name
            : state.user.full_name}
        </p>
        {state.user.email}
      </div>
      <Popover
        placement="bottomRight"
        trigger={'click'}
        arrow={false}
        overlayStyle={{
          top: '65px',
          width: '200px'
        }}
        content={<UserDropdown />}
      >
        <MdKeyboardArrowDown className="text-2xl font-bold" />
      </Popover>
    </div>
  )
}

export default UserAccount
