import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useMemo } from 'react'
import { Databoard } from '@features/databoard/lib/types'
import { IoMdEye } from 'react-icons/io'
import { getCountryLabel } from '@lib/utils'
import { useAuth } from '@auth/hooks/useAuth'
import { hasPermission } from '@lib/user-roles'

type Props = {
  data?: Databoard[]
  isLoading: boolean
  onViewDetails: (Databoard: Databoard) => void
}

function SubscriptionTable({ data, isLoading, onViewDetails }: Props) {
  const { state, actions } = useAuth()
  const tableColumns = useMemo(() => {
    const columns: ColumnsType<Databoard> = [
      {
        title: 'Subscription Country',
        dataIndex: 'country',
        key: 'country',
        render: (country) => <span>{getCountryLabel(country)}</span>
      },
      {
        title: 'Standard Rate ($)',
        dataIndex: 'standard_rate',
        key: 'standard_rate'
      },
      {
        title: 'Advanced Rate ($)',
        dataIndex: 'advanced_rate',
        key: 'advanced_rate'
      },
      {
        title: 'Premium Rate ($)',
        dataIndex: 'premium_rate',
        key: 'premium_rate'
      },
      {
        title: 'Last Updated',
        dataIndex: 'last_updated',
        key: 'last_updated'
      },
      {
        title: 'Tag',
        dataIndex: 'tags',
        key: 'tags'
      },
      {
        title: 'Show New Tag',
        dataIndex: 'newly_launched',
        key: 'newly_launched'
      },
      {
        title: '',
        dataIndex: 'action',
        key: 'action',
        render: (action, record) => {
          return hasPermission(state.user, 'canEditDataboard') ? (
            <div
              onClick={() => onViewDetails(record)}
              className="text-blue-700 flex items-center  gap-2 cursor-pointer"
            >
              Edit
            </div>
          ) : null
        }
      }
    ]

    return columns
  }, [])

  return (
    <>
      <Table
        scroll={{ x: 900 }}
        columns={tableColumns}
        loading={isLoading}
        dataSource={data ? data : []}
      />
    </>
  )
}
export default SubscriptionTable
