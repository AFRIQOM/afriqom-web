import { PageContainer } from '@components/ui/container'
import { useEffect, useState } from 'react'
import { Organization } from '@features/organization/lib/types'
import ToolbarLayout from '@components/ui/ToolbarLayout'
import { Input } from 'antd'
import OrganisationTable from '@features/organization/components/OrganisationTable'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'
import { useGetOrganizations } from '@features/organization/queries/useGetOrganizations'
import FilterTag from '@components/core/FilterTag'
import { AppApprovalStatus } from '@features/organization/lib/constants'
import { AppStatus } from '@lib/status'

export default function ManageOrganizations() {
  const [filterStatus, setFilterStatus] = useState<
    { label: string; key: AppStatus } | undefined
  >(undefined)
  const { data, isLoading } = useGetOrganizations({
    params: {
      status: filterStatus?.key
    }
  })
  const navigate = useNavigate()

  const handleViewDetails = (record: Organization) => {
    navigate(`${AppRoutes.previewOrganization}/?${record.id}`)
  }
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    if (data) {
      setFilteredData(data)
    }
  }, [data])
  const handleSearch = (e: any) => {
    const value = e.target.value
    setSearchValue(value)

    const filtered = data?.filter(
      (item: Organization) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase()) ||
        item.country.toLowerCase().includes(value.toLowerCase()) ||
        item.subscription.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredData(filtered)
  }
  return (
    <PageContainer title="Manage Organisations">
      <div className="overflow-hidden  px-2 pb-2 ">
        <ToolbarLayout
          leftControls={
            <div className={'flex w-full gap-x-2'}>
              <Input
                className={'max-w-2xl'}
                value={searchValue}
                onChange={handleSearch}
                placeholder="Organizations"
              />
              <FilterTag<{ label: string; key: AppStatus }>
                label={'Status'}
                title={'Select Status'}
                onChange={setFilterStatus}
                options={AppApprovalStatus}
                renderLabel={(el) => el.label}
                value={filterStatus}
                isSelected={(el) => el.key === filterStatus?.key}
              />
            </div>
          }
        />
        <OrganisationTable
          data={filteredData}
          isLoading={isLoading}
          onViewDetails={handleViewDetails}
        />
      </div>
    </PageContainer>
  )
}
