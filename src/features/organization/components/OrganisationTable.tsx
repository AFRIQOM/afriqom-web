import { useAuth } from '@auth/hooks/useAuth'
import { Organization } from '@features/organization/lib/types'
import { hasPermission } from '@lib/user-roles'
import { getCountryLabel } from '@lib/utils'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useMemo } from 'react'
import { IoEye } from 'react-icons/io5'
import StatusTag from '@components/ui/StatusTag'
import { AppApprovalStatus } from '@features/organization/lib/constants'

type Props = {
  data?: Organization[]
  isLoading: boolean
  onViewDetails: (record: Organization) => void
}

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: Organization[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  getCheckboxProps: (record: Organization) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
}
export default function OrganisationTable({
  data,
  isLoading,
  onViewDetails
}: Props) {
  const { state } = useAuth()

  const tableColumns = useMemo(() => {
    const columns: ColumnsType<Organization> = [
      {
        title: 'Organisation',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: '16%',
        render: (status) => (
          <StatusTag lookup={AppApprovalStatus} status={status} />
        )
      },
      {
        title: 'Country of operations',
        dataIndex: 'country',
        key: 'country',
        render: (country) => <span>{getCountryLabel(country)}</span>
      },
      {
        title: 'Subscription Type',
        dataIndex: 'subscription',
        key: 'subscription'
      },
      ...(hasPermission(state.user, 'canViewAccountDetails')
        ? [
            {
              title: '',
              dataIndex: 'action',
              key: 'action',
              render: (id: any, record: Organization) => (
                <div
                  onClick={() => onViewDetails(record)}
                  className="flex cursor-pointer items-center gap-1"
                >
                  <IoEye className="text-blue-500" />
                  <span className="text-md text-blue-500">View details</span>
                </div>
              )
            }
          ]
        : [])
    ]

    return columns
  }, [onViewDetails, state.user])

  return (
    <Table
      scroll={{ x: 900 }}
      columns={tableColumns}
      loading={isLoading}
      dataSource={data ? data.map((item) => ({ ...item, key: item.id })) : []}
    />
  )
}
