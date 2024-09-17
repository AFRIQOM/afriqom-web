import React, { useMemo } from 'react'
import {
  AppStatus,
  getStatusColorClass,
  getStatusDotColorClass
} from '@lib/status'
import { capitalizeFirstLetter } from '@lib/utils'
import { Tag } from 'antd'
import cn from 'classnames'
import { AppApprovalStatus } from '@features/organization/lib/constants'

type Props = {
  status: AppStatus
  size?: 'sm' | 'md'
  lookup?: typeof AppApprovalStatus
}

function StatusTag({ status, size = 'sm', lookup = AppApprovalStatus }: Props) {
  const defaultLookup: Record<AppStatus, string> = useMemo(
    () =>
      lookup.reduce<Record<AppStatus, string>>((acc, el) => {
        return { ...acc, [el.key]: el.label }
      }, {} as Record<AppStatus, string>),
    [lookup]
  )

  return (
    <div>
      <Tag className={`rounded-xl border-none ${getStatusColorClass(status)}`}>
        <div
          className={cn(
            'flex items-center gap-1  text-content-tertiary',
            { 'p-0.5': size === 'sm' },
            { 'p-1': size === 'md' }
          )}
        >
          <span
            className={cn(
              'rounded-full',
              { 'h-2 w-2': size === 'sm' },
              { 'h-3 w-3': size === 'md' },
              getStatusDotColorClass(status)
            )}
          />
          <span className="text-xs text-content-secondary">
            {capitalizeFirstLetter(defaultLookup[status] ?? status)}
          </span>
        </div>
      </Tag>
    </div>
  )
}

export default StatusTag
