import React from 'react'
import { LogoutOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useAuth } from '@auth/hooks/useAuth'
import { AppRoutes } from '@lib/appRoutes'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import Logo from '@components/shared/Logo'
import { Dashboard, CampaignSharp } from '@mui/icons-material'

function Sidebar() {
  const { actions } = useAuth()
  return (
    <div className={'pt-[80px]'}>
      <Menu
        theme="dark"
        defaultSelectedKeys={AppRoutes.dashboard}
        mode="inline"
      >
        <Menu.Item
          key={AppRoutes.dashboard}
          icon={<Dashboard rev={undefined} />}
        >
          <Link to={AppRoutes.dashboard}>Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          key={AppRoutes.campaigns}
          icon={<CampaignSharp rev={undefined} />}
        >
          <Link to={AppRoutes.campaigns}>Campaigns</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Sidebar
