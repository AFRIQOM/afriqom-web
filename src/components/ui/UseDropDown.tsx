import { useAuth } from '@auth/hooks/useAuth'
import { Avatar, Divider } from 'antd'
import { getInitials } from './GetInitialProps'

export default function UserDropdown() {
  const { actions, state } = useAuth()
  return (
    <div>
      <Divider style={{ margin: 0 }} />
      <span
        role={'button'}
        onClick={() => actions.logout()}
        className={
          'block cursor-pointer rounded-md px-3 py-2 text-sm  font-medium hover:bg-surface-tertiary'
        }
      >
        Sign out
      </span>
      <Divider style={{ margin: 0 }} />
    </div>
  )
}
