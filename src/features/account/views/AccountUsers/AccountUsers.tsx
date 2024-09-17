import React, { useState } from 'react'
import { MdContentCopy, MdDashboardCustomize } from 'react-icons/md'
import { Modal, Button, Divider } from 'antd'
import UsersTable from './component/UsersTable'
import { useAuth } from '@auth/hooks/useAuth'
import EditUserForm from '../../../users/components/EditUserForm'
import { User, UserBody, UserDraft } from '@auth/lib/types'
import { UserDraftToUserBody } from '@auth/lib/dto'
import { hasPermission } from '@lib/user-roles'
import { useSaveUser } from '@features/account/hooks/useSaveUser'
import { useGetUsers } from '@features/account/queries/useGetUsers'
import { UserSuccessModal } from '@features/users/components/UserSuccessModal'

function AccountUsers() {
  const [openAddUserModal, setOpenAddUserModal] = useState(false)

  const {
    actions: { saveUser, setNewUsername, setNewPassword, setOpenSuccessModal },
    state: {
      newPassword,
      openSuccessModal,
      newUsername,
      isLoading: savingUser,
      errorMessage
    }
  } = useSaveUser()

  const { state } = useAuth()
  const { data, isLoading, refetch } = useGetUsers({
    params: {
      organisation_id: state.currentOrganisation?.id,
      access_portal: 'client'
    }
  })
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)

  const onSubmit = (values: UserDraft) => {
    const userBody: UserBody = UserDraftToUserBody(
      {
        ...values,
        status: values.status ?? selectedUser?.status
      },
      {
        organisation_id: state.currentOrganisation?.id,
        access_portal: 'client'
      }
    )
    saveUser(
      { body: userBody, id: selectedUser?.id },
      {
        onSuccess() {
          refetch()
          setNewUsername(values.email)
          setNewPassword(values.password)
          setOpenAddUserModal(false)
          values.password && setOpenSuccessModal(true)
        }
      }
    )
  }

  const handleAddUser = () => {
    setOpenAddUserModal(true)
  }

  const handleViewDetails = (user: User) => {
    setSelectedUser(user)
    setOpenAddUserModal(true)
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <p className="text-content-secondary">Manage users</p>
        {hasPermission(state.user, 'canAddAccountUser') && (
          <Button
            className="bg-green-500 text-white"
            icon={<MdDashboardCustomize />}
            onClick={handleAddUser}
          >
            Add
          </Button>
        )}
      </div>
      <UsersTable
        data={data}
        isLoading={isLoading}
        onViewDetails={handleViewDetails}
      />
      <Modal
        centered
        width={600}
        footer={null}
        open={openAddUserModal}
        destroyOnClose
        title={selectedUser ? 'Edit User' : 'Add User'}
        className="modal header"
        onCancel={() => {
          setOpenAddUserModal(false)
          setSelectedUser(undefined)
        }}
      >
        <EditUserForm
          user={selectedUser}
          onSubmit={onSubmit}
          isSubmitting={savingUser}
          errorMessage={errorMessage}
          isAdminUser={false}
        />
      </Modal>
      <UserSuccessModal
        openSuccessModal={openSuccessModal}
        newPassword={newPassword}
        newUsername={newUsername}
        setOpenSuccessModal={setOpenSuccessModal}
      />
    </div>
  )
}

export default AccountUsers
