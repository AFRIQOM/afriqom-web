import React, { useMemo, useState } from 'react'
import { Button, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { getCountryLabel } from '@lib/utils'
import { SubscriptionView } from '@features/subscription/lib/types'
import { hasPermission } from '@lib/user-roles'
import { useAuth } from '@auth/hooks/useAuth'
import StatusTag from '@components/ui/StatusTag'

type Props = {
  data?: SubscriptionView[]
  isLoading: boolean
  onViewDetails: (record: SubscriptionView) => void
  onExtendSubscription: (record: SubscriptionView) => void
  onCancel: (record: SubscriptionView) => void
}

function SubscriptionTable({
  data,
  isLoading,
  onExtendSubscription,
  onViewDetails,
  onCancel
}: Props) {
  const { state, actions } = useAuth()

  const tableColumns = useMemo(() => {
    const columns: ColumnsType<SubscriptionView> = [
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
      ...(hasPermission(state.user, ['canViewAccountPaidRateForSubscription'])
        ? [
            {
              title: 'Annual Rate',
              dataIndex: 'rate_paid',
              key: 'rate_paid'
            }
          ]
        : []),

      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => <StatusTag status={actions.mapAuthStatus(status)} />
      },
      ...(hasPermission(state.user, [
        'canEditAccountSubscription',
        'canEditAccountSubscriptionDashboardUlr'
      ])
        ? [
            {
              title: '',
              dataIndex: 'action',
              key: 'action',
              render: (action: any, record: SubscriptionView) => (
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => onViewDetails(record)}
                    className="text-blue-700 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Edit
                  </div>
                  {hasPermission(state.user, ['canCancelSubscription']) && (
                    <Button onClick={() => onCancel(record)}>
                      Cancel Subscription
                    </Button>
                  )}
                  {/* <p className="text-red-400">Cancel Subscription</p> */}
                </div>
              )
            }
          ]
        : []),
      ...(hasPermission(state.user, ['canExtendSubscription'])
        ? [
            {
              title: '',
              dataIndex: 'edit',
              key: 'edit',
              render: (edit: any, record: SubscriptionView) => (
                <div
                  onClick={() => onExtendSubscription(record)}
                  className="text-blue-700 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Extend Subscription
                </div>
              )
            }
          ]
        : [])
    ]

    return columns
  }, [actions, onCancel, onExtendSubscription, onViewDetails, state.user])

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

export default SubscriptionTable
