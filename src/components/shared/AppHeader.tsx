import { useTheme } from '@app/components/ThemeProvider/useTheme'
import { useAuth } from '@auth/hooks/useAuth'
import MenuItem from '@components/ui/MenuItem'
import { Avatar, Drawer } from 'antd'
import React, { useState } from 'react'
import { IoLogOutOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { MdMenu } from 'react-icons/md'
import Logo from './Logo'
import UserAccount from '@components/ui/UserAccount'
import { AppRoute } from '@lib/types'
import { getImageUrl } from '@lib/images'
import { getInitials } from '@components/ui/GetInitialProps'

type Props = {
  menuItems: AppRoute[]
}

function AppHeader({ menuItems }: Props) {
  const { isDark, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const { state, actions } = useAuth()

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  return (
    <div
      className={
        'flex size-full   items-center justify-between gap-3 bg-surface-default  px-10 text-content-default'
      }
    >
      <div
        style={{ width: 250 }}
        className="flex items-center justify-between gap-2 font-bold"
      >
        <Logo />
      </div>
      <div className="hidden size-full items-center justify-between md:flex">
        <div className="flex gap-3">
          {menuItems.map((item, i) => (
            <MenuItem key={i} menuItem={item} />
          ))}
        </div>
        <div className="flex h-full ">
          <div className="flex items-center gap-x-10">
            <div className="flex grow items-center gap-x-3">
              <div className="flex items-center gap-4">
                <UserAccount />
                <div
                  onClick={toggleTheme}
                  className="flex size-10 items-center justify-center rounded-full bg-surface-secondary p-1"
                >
                  {isDark ? (
                    <IoSunnyOutline className="text-content-default" />
                  ) : (
                    <IoMoonOutline className="text-content-default" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MdMenu
        className="flex cursor-pointer text-2xl md:hidden"
        onClick={showDrawer}
      />
      {/* Mibile view */}
      <Drawer
        placement="left"
        onClose={onClose}
        extra={
          <div
            onClick={toggleTheme}
            className="flex size-10 items-center justify-center rounded-full bg-surface-secondary p-1"
          >
            {isDark ? (
              <IoSunnyOutline className="text-content-default" />
            ) : (
              <IoMoonOutline className="text-content-default" />
            )}
          </div>
        }
        width={240}
        open={open}
        footer={
          <div className="flex items-center justify-between">
            <div className="flex w-full items-center gap-2">
              <Avatar
                size={'large'}
                src={getImageUrl(state.currentOrganisation?.logo)}
              >
                {getInitials(state.currentOrganisation?.name ?? '')}
              </Avatar>
              <div className="text-content-secondary">
                <p className="my-0 font-bold text-content-default">
                  {state.currentOrganisation?.name}
                </p>
                {state.currentOrganisation?.email}
              </div>
            </div>
            <IoLogOutOutline
              className="text-content-default"
              onClick={() => actions.logout()}
            />
          </div>
        }
      >
        <div className="flex flex-col gap-2 ">
          {menuItems.map((item, i) => (
            <MenuItem key={i} menuItem={item} />
          ))}
        </div>
      </Drawer>
    </div>
  )
}

export default AppHeader
