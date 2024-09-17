import { AppRoute } from '@lib/types'
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  menuItem: AppRoute
}

function MenuItem({ menuItem }: Props) {
  const { icon: MenuIcon } = menuItem
  return (
    <NavLink to={menuItem.path}>
      {({ isActive }) => (
        <div
          className={`hover:bg-surface-secondary px-3 py-2  rounded-lg ${
            isActive
              ? ' font-bold text-primary-default '
              : 'text-content-default font-medium'
          }`}
        >
          <div className="flex gap-3 items-center">
            <MenuIcon />
            <p>{menuItem.label}</p>
          </div>
        </div>
      )}
    </NavLink>
  )
}

export default MenuItem
