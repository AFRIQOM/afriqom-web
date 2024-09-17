import React, { useEffect, useMemo, useState } from 'react'
import { Button, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'
import { useOrganizationHandler } from '@features/account/hooks/useOrganizationHandler'
import { getCountryLabel } from '@lib/utils'
import { useTheme } from '@app/components/ThemeProvider/useTheme'
import { useAuth } from '@auth/hooks/useAuth'

const PreviewDashboard = () => {
  const navigate = useNavigate()
  const { theme } = useTheme()
  const { state } = useAuth()
  const currentUrl = window.location.href
  const urlObj = new URL(currentUrl)
  const queryString = urlObj.search.slice(1)

  const { accessibleDataboards: subscriptionBoards, isLoading } =
    useOrganizationHandler()
  const currentBoard = useMemo(() => {
    const board = subscriptionBoards.find(
      (board) => board.country.toLowerCase() === queryString.toLowerCase()
    )
    if (!board) navigate(AppRoutes.dashboard)
    return board
  }, [subscriptionBoards, navigate, queryString])

  const currentCountry = currentBoard?.country

  const [selectedCountry, setSelectedCountry] = useState(currentCountry)

  useEffect(() => {
    if (currentCountry) {
      setSelectedCountry(currentCountry)
    }
  }, [currentCountry])

  const handleMenuClick = (e: any) => {
    setSelectedCountry(e.key)
    navigate(`${AppRoutes.preview}?${e.key.toLowerCase()}`)
  }

  const menu = (
    <Menu onClick={handleMenuClick} className="w-full">
      {subscriptionBoards.map((board, index) => (
        <Menu.Item key={board.country}>
          <div className="flex gap-5 items-center w-full">
            <img
              src={`/assets/${board.country.toLowerCase()}.png`}
              alt={board.country.toLowerCase()}
              className="w-6 h-6 object-cover rounded-full"
            />
            <p>{getCountryLabel(board.country)}</p>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <div className="bg-surface-default pt-10">
      <div className="h-[80px] flex items-center bg-gradient-to-r from-cyan-900 from-40% to-green-500 to-80% px-10 ">
        <div className={'pt-5  text-md font-bold text-white'}>
          <Dropdown overlay={menu} className="max-w-md">
            <Button className="max-w-xs" size="large">
              {selectedCountry ? (
                <div className="flex gap-5 justify-between items-center">
                  <img
                    src={`/assets/${selectedCountry.toLowerCase()}.png`}
                    alt={selectedCountry.toLowerCase()}
                    className="w-6 h-6 object-cover"
                  />
                  <span>{getCountryLabel(selectedCountry)}</span>
                  <DownOutlined />
                </div>
              ) : (
                'Select Country'
              )}
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className={'w-full mb-10'}>
        {currentBoard && (
          <iframe
            key={theme}
            src={
              (currentBoard as any)[
                `${currentBoard.license!.toLowerCase()}_${theme}_databoard_url`
              ] as any
            }
            className={'h-screen w-full bg-surface-secondary'}
          />
        )}
      </div>
      <div className="fixed w-screen bottom-0 flex items-center justify-between  bg-surface-secondary text-content-default p-2">
        <span className="text-sm">Powered By Africa Analitica</span>
        <span className="text-sm">
          License: {state.currentOrganisation?.subscription}
        </span>
      </div>
    </div>
  )
}
export default PreviewDashboard
