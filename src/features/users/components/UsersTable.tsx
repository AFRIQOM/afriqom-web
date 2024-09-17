import React, { useMemo, useState } from 'react'
import { Button, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { IoMdEye } from 'react-icons/io'
import { User } from '@auth/lib/types'
import { capitalizeFirstLetter } from '@lib/utils'
import StatusTag from '@components/ui/StatusTag'

type Props = {
  data?: User[]
  isLoading: boolean
  onViewDetails: (user: User) => void
}

function UsersTable({ data, isLoading, onViewDetails }: Props) {
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
      {
        title: 'Role',
        dataIndex: 'account_type',
        key: 'account_type'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: '16%',
        render: (status) => <StatusTag status={status} />
      },
      {
        title: '',
        dataIndex: 'action',
        key: 'action',
        render: (action, record) => (
          <div
            onClick={() => onViewDetails(record)}
            className="text-blue-700 flex items-center justify-center gap-2 cursor-pointer"
          >
            <IoMdEye />
            Edit
          </div>
        )
      }
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
