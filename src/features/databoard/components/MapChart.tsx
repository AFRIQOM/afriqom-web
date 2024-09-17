import React, { useEffect, useRef, useState } from 'react'
import { VectorMap } from '@react-jvectormap/core'
import africaMill from './africanMap.json'
import { OrganizationBoard } from '@features/databoard/lib/types'
import { getDashboardState } from '@features/databoard/lib/helper'

type Props = {
  onClick: (dashboardData: OrganizationBoard) => void
  databoards: OrganizationBoard[]
}
const MapChart = ({ onClick, databoards }: Props) => {
  const [isShowMap, setIsShowMap] = useState(true)

  const hashboard = JSON.stringify(databoards)
  useEffect(() => {
    setIsShowMap(false)
    setTimeout(() => {
      setIsShowMap(true)
    })
  }, [hashboard])

  useEffect(() => {
    return () => {
      document.querySelectorAll('.jvectormap-tip').forEach((element) => {
        element.remove()
      })
    }
  }, [])

  return (
    <div className="flex items-center justify-center h-[600px] w-full">
      {isShowMap && (
        <VectorMap
          className="h-[600px] w-full"
          map={africaMill}
          backgroundColor="surface-secondary"
          regionStyle={(code) => {
            const country = databoards.find((el) => el.country === code)

            const {
              isActive = false,
              isPending = false,
              hasSubscription = false,
              hasExpired = false
            } = country ? getDashboardState(country) : {}

            let fillColor = 'var(--surface-default)'
            let hoverFillColor = 'var(--surface-secondary)'
            if (isPending) {
              fillColor = '#c9ba8f'
              hoverFillColor = '#f8ce58'
            }
            if (country && !hasSubscription) {
              fillColor = 'var(--surface-tertiary)'
              hoverFillColor = '#eceae6'
            }
            if (isActive) {
              hoverFillColor = '#187631'
              fillColor = 'var(--primary-default)'
            }
            if (hasExpired) {
              fillColor = '#d7a2a2'
              hoverFillColor = '#e79595'
            }

            return {
              initial: {
                fill: fillColor,
                stroke: 'var(--solid-200)',
                strokeWidth: '2px',
                strokeOpacity: 1
              },
              hover: {
                fill: hoverFillColor,
                cursor: 'pointer'
              }
            }
          }}
          onRegionClick={(event, code) => {
            const board = databoards.find((el) => el.country === code)
            if (board) onClick(board)
          }}
          zoomOnScroll={false}
        />
      )}
    </div>
  )
}

export default MapChart
