import React, { useMemo, useState } from 'react'
import { PageContainer } from '@components/ui/container'
import ToggleButtons from '../../components/ToggleButtons'
import { Button, Input, Modal } from 'antd'
import { MdDashboardCustomize } from 'react-icons/md'
import DashboardCard from '@features/databoard/views/components/DashboardCard'
import Loading from '@components/ui/Loading'
import MapChart from '@features/databoard/components/MapChart'
import { Link, useNavigate } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'
import { useOrganizationHandler } from '@features/account/hooks/useOrganizationHandler'
import { getCountryLabel } from '@lib/utils'
import { useAuth } from '@auth/hooks/useAuth'
import { OrganizationBoard } from '@features/databoard/lib/types'
import PendingBoardModalContent from '@components/ContactUsModal'
import { hasPermission } from '@lib/user-roles'
import { getDashboardState } from '@features/databoard/lib/helper'

function DashboardManagement() {
  const [selected, setSelected] = useState(0)
  const { accessibleDataboards: OrganizationBoard, isLoading } =
    useOrganizationHandler()
  const { state } = useAuth()
  const [searchValue, setSearchValue] = useState('')

  const filteredData = useMemo(() => {
    return searchValue
      ? OrganizationBoard.filter(
          (item) =>
            getCountryLabel(item.country)
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            item.tags.toLowerCase().includes(searchValue.toLowerCase())
        )
      : OrganizationBoard
  }, [OrganizationBoard, searchValue])

  const navigate = useNavigate()
  const [dashboardAlert, setDashboardAlert] = useState<{
    isOpened: boolean
    variant?: 'pending' | 'expired'
  }>({ isOpened: false })

  const onDashboardClick = (dashboard: OrganizationBoard) => {
    const { isPending, isActive, hasExpired } = getDashboardState(dashboard)
    if (isPending) {
      return setDashboardAlert({ isOpened: true, variant: 'pending' })
    }
    if (hasExpired) {
      return setDashboardAlert({ isOpened: true, variant: 'expired' })
    }
    if (isActive)
      return navigate(`${AppRoutes.preview}?${dashboard.country.toLowerCase()}`)
    navigate(`${AppRoutes.buySubscription}`)
  }

  return (
    <PageContainer title="Dashboard">
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" bg-surface-secondary  py-5 overflow-hidden ">
          <div className="flex flex-col sm:flex-row gap-4 items-center pb-5">
            <Input
              placeholder="Search By Country"
              className="px-3 py-2"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
            />
            <div className="flex justify-between items-center gap-4">
              <ToggleButtons selected={selected} setSelected={setSelected} />
              {state.currentOrganisation?.subscription !== 'Full Access' &&
                hasPermission(state.user, 'canAddAccountSubscription') && (
                  <Link to={`${AppRoutes.buySubscription}`}>
                    <Button icon={<MdDashboardCustomize />} type="primary">
                      Add dashboard
                    </Button>
                  </Link>
                )}
            </div>
          </div>
          {filteredData.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <span className="text-content-secondary text-lg">
                No data found
              </span>
            </div>
          ) : (
            <>
              {selected === 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 place-content-start">
                  <div className="grid grid-cols-1  md:grid-cols-2 gap-3 place-content-start">
                    {filteredData.map((data) => (
                      <DashboardCard
                        onClick={() => {
                          onDashboardClick(data)
                        }}
                        key={data.id}
                        dashboardData={data}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-1 ">
                    <MapChart
                      databoards={filteredData}
                      onClick={(data) => {
                        onDashboardClick(data)
                      }}
                    />
                  </div>
                </div>
              )}
              {selected === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {filteredData.map((data) => (
                    <DashboardCard
                      onClick={() => {
                        onDashboardClick(data)
                      }}
                      key={data.id}
                      dashboardData={data}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
      <PendingBoardModalContent
        onClose={() => setDashboardAlert({ isOpened: false })}
        isOpened={dashboardAlert.isOpened}
        title={
          dashboardAlert.variant == 'pending'
            ? 'Pending Verification'
            : 'Subscription Expired'
        }
        description={
          <React.Fragment>
            {dashboardAlert.variant == 'pending'
              ? ' Your subscription is pending and will be processed within the next 24 hours. If the issue persists, please contact our sales team at'
              : 'You cannot access this dashboard because your subscription has expired. Please contact our sale team to renew your subscription at'}
            <span className="text-blue-500"> sales@afriqom.com</span>
          </React.Fragment>
        }
      />
    </PageContainer>
  )
}

export default DashboardManagement
