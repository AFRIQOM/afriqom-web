import React, { useMemo } from 'react'
import { OrganizationBoard } from '../../lib/types'
import { Tag } from 'antd'
import countryList from 'react-select-country-list'
import { getDashboardState } from '@features/databoard/lib/helper'
import dayjs from 'dayjs'

type Props = {
  dashboardData: OrganizationBoard
  onClick: () => void
}

function DashboardCard({ dashboardData, onClick }: Props) {
  const options = useMemo(() => countryList().getData(), [])
  const country = useMemo(() => {
    const countryCode = options.find(
      (option) => option.value === dashboardData.country
    )
    return countryCode ? countryCode.label : 'Unknown Country'
  }, [dashboardData.country, options])

  const { isActive, isPending, hasSubscription, hasExpired, isKnew } =
    useMemo(() => {
      return getDashboardState(dashboardData)
    }, [dashboardData])

  const renderTag = () => {
    if (isPending) return <Tag color="#c8bb8f">Pending</Tag>
    if (hasExpired) return <Tag color="#f50">Expired</Tag>
    if (!hasSubscription) return <Tag>Subscribe</Tag>
    if (isKnew) return <Tag color="#F4BF2A">New</Tag>
  }
  const { expiryDate, daysRemaining } = useMemo(() => {
    const today = dayjs()
    const expiryDateValue = dayjs(dashboardData.expiry_date)
    const daysRemainingValue = expiryDateValue.diff(today, 'day')
    return {
      today: today,
      expiryDate: expiryDateValue,
      daysRemaining: daysRemainingValue
    }
  }, [dashboardData.expiry_date])

  return (
    <div
      onClick={onClick}
      className={`relative flex  max-w-md flex-col justify-center cursor-pointer  rounded-sm border p-2 shadow-sm
          transition-transform  duration-500 hover:scale-110 hover:opacity-75 ${
            dashboardData.license && dashboardData.status !== 'pending'
              ? 'bg-surface-default'
              : 'bg-surface-tertiary'
          }
         `}
    >
      <div className="absolute right-1 top-1 ">{renderTag()}</div>
      <div className="m-2 flex  min-h-24 items-start gap-4 ">
        <div className="flex flex-col items-center ">
          <div className="size-20">
            <img
              src={`/assets/${dashboardData.country.toLowerCase()}.png`}
              alt={dashboardData.country.toLowerCase()}
              className="size-full rounded-full bg-cover"
            />
          </div>
          <span className="text-sm text-content-secondary">
            {dashboardData.license}
          </span>
        </div>
        <div className="flex flex-col items-start w-40">
          <span className=" text-base text-content-default font-bold">
            {country}
          </span>
          {dashboardData.expiry_date && (
            <>
              {daysRemaining > 7 || daysRemaining === 0 ? (
                <span className="text-xs font-medium text-content-default">
                  Expires on {expiryDate.format('YYYY-MM-DD')}
                </span>
              ) : daysRemaining > 0 && daysRemaining !== 1 ? (
                <span className="text-xs mt-1 p-0.5 bg-red-300 font-bold rounded-sm">
                  Expires in {daysRemaining} days
                </span>
              ) : daysRemaining === 1 ? (
                <span className="text-xs mt-1 p-0.5 bg-red-300 font-bold rounded-sm">
                  Expires in {daysRemaining} day
                </span>
              ) : (
                <span className="text-xs font-medium text-red-500">
                  Expired on {expiryDate.format('YYYY-MM-DD')}
                </span>
              )}
            </>
          )}
          <div className="flex flex-wrap gap-0.5 mt-2 ">
            {dashboardData?.tags?.split(',').map((tag, index) => (
              <div
                key={index}
                className="p-1 text-xs bg-surface-secondary text-content-default rounded"
                style={{ display: 'inline-block', marginRight: '0.5rem' }}
              >
                {tag.trim()}
              </div>
            ))}
          </div>
        </div>
      </div>
      {dashboardData.last_updated && (
        <div className="text-xs text-content-tertiary flex justify-end text-end mt-auto">
          Last updated on {dashboardData.last_updated}
        </div>
      )}
    </div>
  )
}

export default DashboardCard
