import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useMemo } from 'react'
import { RegionDataborad } from '@features/databoard/lib/types'
import StatusTag from '@components/ui/StatusTag'
import { useIntl } from 'react-intl'

type Props = {
  data?: RegionDataborad[]
  isLoading: boolean
  onViewDetails: (regionBoard: RegionDataborad) => void
}

function FullAccessTable({ data, isLoading, onViewDetails }: Props) {
  const intl = useIntl()
  const tableColumns = useMemo(() => {
    const columns: ColumnsType<RegionDataborad> = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Standard Rate ($)',
        dataIndex: 'standard_rate',
        key: 'standard_rate',
        render: (value) => intl.formatNumber(Number(value))
      },
      {
        title: 'Advanced Rate ($)',
        dataIndex: 'advanced_rate',
        key: 'advanced_rate',
        render: (value) => intl.formatNumber(Number(value))
      },
      {
        title: 'Premium Rate ($)',
        dataIndex: 'premium_rate',
        key: 'premium_rate',
        render: (value) => intl.formatNumber(Number(value))
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => <StatusTag status={status} />
      },
      {
        title: 'Date Created',
        dataIndex: 'date_created',
        key: 'date_created'
      },
      {
        title: '',
        dataIndex: 'action',
        key: 'action',

        render: (action, record) => (
          <div
            onClick={() => onViewDetails(record)}
            className="text-blue-700 flex items-center  gap-2 cursor-pointer"
          >
            Edit
          </div>
        )
      }
    ]

    return columns
  }, [intl, onViewDetails])

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
export default FullAccessTable
