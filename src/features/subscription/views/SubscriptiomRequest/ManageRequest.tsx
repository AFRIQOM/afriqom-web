import { PageContainer } from '@components/ui/container'
import RequestSubscriptionTable from './components/SubscriptionTable'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'
import { useGetSubscriptionsView } from '@features/subscription/queries/useGetSubscriptionsView'
import {
  Subscription,
  SubscriptionView
} from '@features/subscription/lib/types'
import { useSubscriptionMutator } from '@features/subscription/hooks/useSubscriptionMutator'
import { useAuth } from '@auth/hooks/useAuth'
import { hasPermission } from '@lib/user-roles'
import ToolbarLayout from '@components/ui/ToolbarLayout'
import { Input } from 'antd'
import { useMemo, useState } from 'react'
import FilterTag from '@components/core/FilterTag'
import { AppApprovalStatus } from '@features/organization/lib/constants'

function ManageRequest() {
  const navigate = useNavigate()
  const [filterStatus, setFilterStatus] = useState<
    { label: string; key: string } | undefined
  >(undefined)
  const { user } = useAuth().state
  const {
    data: subscriptions,
    isLoading,
    refetch
  } = useGetSubscriptionsView({
    params: {
      'status:in': filterStatus
        ? filterStatus.key
        : hasPermission(user, 'canApproveAccountSubscription')
        ? 'approval request,pending'
        : 'pending'
    }
  })
  const { state, actions } = useSubscriptionMutator()
  const handleViewDetails = (record: SubscriptionView) => {
    navigate(`${AppRoutes.previewOrganization}/?${record.organisation_id}`)
  }
  const [searchValue, setSearchValue] = useState('')

  const filteredData = useMemo(() => {
    if (!searchValue) return subscriptions
    return subscriptions?.filter(
      (item: SubscriptionView) =>
        item.organisation_name
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        item.license.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [searchValue, subscriptions])

  const handleStatusUpdate = (
    record: Subscription,
    status: Subscription['status']
  ) => {
    actions.updateSubscription(
      {
        id: record.id,
        body: {
          status
        }
      },
      {
        onSuccess() {
          refetch()
        }
      }
    )
  }

  return (
    <PageContainer title="Manage Subscription Requests">
      <ToolbarLayout
        leftControls={
          <div className={'flex gap-x-2 w-full'}>
            <Input
              className={'max-w-4xl'}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
              placeholder="Organizations"
            />
            <FilterTag<{ label: string; key: string }>
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
      <RequestSubscriptionTable
        data={filteredData}
        isLoading={isLoading || state.isUpdating}
        handleStatusUpdate={handleStatusUpdate}
        onViewDetails={handleViewDetails}
      />
    </PageContainer>
  )
}

export default ManageRequest
