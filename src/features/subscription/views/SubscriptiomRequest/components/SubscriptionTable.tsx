import React, { useMemo } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { hasPermission } from '@lib/user-roles'
import { useAuth } from '@auth/hooks/useAuth'
import {
  Subscription,
  SubscriptionView
} from '@features/subscription/lib/types'
import StatusTag from '@components/ui/StatusTag'
import StatusDropDown from '@features/account/views/AccountSettings/components/StatusDropdown'
import { getCountryLabel } from '@lib/utils'
import { AppApprovalStatus } from '@features/organization/lib/constants'

type Props = {
  data?: SubscriptionView[]
  isLoading: boolean
  onViewDetails: (record: SubscriptionView) => void
  handleStatusUpdate: (
    Record: SubscriptionView,
    status: Subscription['status']
  ) => void
}

function RequestSubscriptionTable({
  data,
  isLoading,
  onViewDetails,
  handleStatusUpdate
}: Props) {
  const { state } = useAuth()

  const tableColumns = useMemo(() => {
    const columns: ColumnsType<SubscriptionView> = [
      {
        title: 'Organisation',
        dataIndex: 'organisation_name',
        key: 'organisation_name'
      },
      {
        title: 'Subscription Country',
        dataIndex: 'country',
        key: 'country',
        render: (country) => <span>{getCountryLabel(country)}</span>
      },
      {
        title: 'Start Date',
        dataIndex: 'start_date',
        key: 'start_date'
      },
      {
        title: 'Renewal Date',
        dataIndex: 'expiry_date',
        key: 'expiry_date'
      },
      {
        title: 'License',
        dataIndex: 'license',
        key: 'license'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (_, record) => (
          <StatusTag lookup={AppApprovalStatus} status={record.status} />
        )
      },
      ...(hasPermission(state.user, 'canViewAccountList')
        ? [
            {
              title: '',
              dataIndex: 'action',
              key: 'action',
              render: (action: any, record: SubscriptionView) => (
                <div className="flex items-center gap-1">
                  <StatusDropDown
                    setStatus={(status) =>
                      handleStatusUpdate(
                        record,
                        status as Subscription['status']
                      )
                    }
                  />
                  <div className="mx-3 h-5 w-0.5 bg-surface-tertiary" />
                  <div
                    onClick={() => onViewDetails(record)}
                    className="flex cursor-pointer items-center gap-1"
                  >
                    <span className="text-md text-blue-500">View details</span>
                  </div>
                </div>
              )
            }
          ]
        : [])
    ]

    return columns
  }, [])

  return (
    <>
      <Table
        scroll={{ x: 900 }}
        columns={tableColumns}
        loading={isLoading}
        dataSource={data}
      />
    </>
  )
}

export default RequestSubscriptionTable
