import React, { useMemo, useState } from 'react'
import { Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { User } from '@auth/lib/types'
import { getCountryLabel } from '@lib/utils'
import { hasPermission } from '@lib/user-roles'
import { useAuth } from '@auth/hooks/useAuth'
import StatusTag from '@components/ui/StatusTag'

type Props = {
  data?: User[]
  isLoading: boolean
  onViewDetails: (user: User) => void
}

function UsersTable({ data, isLoading, onViewDetails }: Props) {
  const { state, actions } = useAuth()
  const getStatusColorClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100'
      case 'pending':
        return 'bg-orange-100'
      case 'expired':
        return 'bg-red-100'
      default:
        return ''
    }
  }

  const getStatusDotColorClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500'
      case 'pending':
        return 'bg-orange-500'
      case 'expired':
        return 'bg-red-500'
      default:
        return 'bg-gray-300'
    }
  }

  const [open, setOpen] = useState(false)
  const tableColumns = useMemo(() => {
    const columns: ColumnsType<User> = [
      {
        title: 'Name',
        dataIndex: 'full_name',
        key: 'full_name',
        render: (name: string, record: User, index: number) => (
          <div className="flex items-center gap-2">
            {name}
            {index === 0 && (
              <div className="bg-blue-500 text-white text-xs md:text-md rounded-md p-1">
                Main Contact
              </div>
            )}
          </div>
        )
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      // {
      //   title: 'Dashboard access',
      //   dataIndex: 'dashboard_access',
      //   key: 'dashboard_access',
      //   render: (dashboard_access) => (
      //     <span>{getCountryLabel(dashboard_access)}</span>
      //   )
      // },
      {
        title: 'Country of access',
        dataIndex: 'access_country_restriction',
        key: 'access_country_restriction',
        render: (dashboard_access) => (
          <div className={'flex gap-x-1'}>
            {dashboard_access.split(',').map((country: string) => (
              <Tag key={country}>{getCountryLabel(country)}</Tag>
            ))}
          </div>
        )
      },
      {
        title: 'Account type',
        dataIndex: 'account_type',
        key: 'account_type'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: '16%',
        render: (status) => <StatusTag status={actions.mapAuthStatus(status)} />
      },
      ...(hasPermission(state.user, 'canEditAccountUser')
        ? [
            {
              title: '',
              dataIndex: 'action',
              key: 'action',
              render: (action: any, record: User) => (
                <div
                  onClick={() => onViewDetails(record)}
                  className="text-blue-700 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Edit
                </div>
              )
            }
          ]
        : [])
    ]

    return columns
  }, [])

  return (
    <Table
      scroll={{ x: 900 }}
      columns={tableColumns}
      loading={isLoading}
      dataSource={data ? data : []}
    />
  )
}

export default UsersTable
