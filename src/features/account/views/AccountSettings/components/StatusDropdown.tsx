import React from 'react'
import { Button, Dropdown } from 'antd'
import { AppApprovalStatus } from '@features/organization/lib/constants'

function StatusDropDown({
  setStatus,
  statusList = AppApprovalStatus
}: {
  setStatus: (status: string) => void
  statusList?: typeof AppApprovalStatus
}) {
  const onMenuClick = (e: any) => {
    setStatus(e.key)
  }
  return (
    <Dropdown
      menu={{ items: statusList, onClick: onMenuClick }}
      trigger={['click']}
    >
      <Button className={'px-1'} type={'link'}>
        Change
      </Button>
    </Dropdown>
  )
}

export default StatusDropDown
