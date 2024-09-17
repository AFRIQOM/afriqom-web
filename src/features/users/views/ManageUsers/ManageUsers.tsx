import React, { useEffect, useState } from 'react'
import { Button, Input, Modal } from 'antd'
import { useAuth } from '@auth/hooks/useAuth'
import { User, UserBody, UserDraft } from '@auth/lib/types'
import { UserDraftToUserBody } from '@auth/lib/dto'
import { PageContainer } from '@components/ui/container'
import UsersTable from '@features/users/components/UsersTable'
import { useSaveUser } from '@features/account/hooks/useSaveUser'
import EditUserForm from '@features/users/components/EditUserForm'
import { useGetUsers } from '@features/account/queries/useGetUsers'
import { hasPermission } from '@lib/user-roles'
import { MdDashboardCustomize } from 'react-icons/md'
import { UserSuccessModal } from '@features/users/components/UserSuccessModal'
import ToolbarLayout from '@components/ui/ToolbarLayout'
import FilterTag from '@components/core/FilterTag'
import { AppApprovalStatus } from '@features/organization/lib/constants'
import { AppStatus } from '@lib/status'

function ManageUsers() {
  const [openEditUserModal, setOpenEditUserModal] = useState(false)
  const { state } = useAuth()
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)
  const [filterStatus, setFilterStatus] = useState<
    { label: string; key: AppStatus } | undefined
  >(undefined)
  const { data, isLoading, refetch } = useGetUsers({
    params: {
      access_portal: 'backend',
      status: filterStatus?.key
    }
  })
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState(data)

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

  const handleViewDetails = (user: User) => {
    setSelectedUser(user)
    setOpenEditUserModal(true)
  }
  const onSubmit = (values: UserDraft) => {
    const userBody: UserBody = UserDraftToUserBody(
      { ...values, status: values.status ?? selectedUser?.status },
      {
        access_portal: 'backend'
      }
    )
    saveUser(
      { body: userBody, id: selectedUser?.id },
      {
        onSuccess() {
          refetch()
          setNewUsername(values.email)
          setNewPassword(values.password)
          setOpenEditUserModal(false)
          values.password && setOpenSuccessModal(true)
        }
      }
    )
  }
  const handleAddUser = () => {
    setOpenEditUserModal(true)
  }

  useEffect(() => {
    if (data) {
      setFilteredData(data)
    }
  }, [data])

  const handleSearch = (e: any) => {
    const value = e.target.value
    setSearchValue(value)

    const filtered = data?.filter(
      (item: User) =>
        item.full_name.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredData(filtered)
  }
  return (
    <PageContainer title="Manage System Users">
      <div className="flex items-center justify-between py-3 w-full">
        <ToolbarLayout
          leftControls={
            <div className={'flex gap-x-2 w-full'}>
              <Input
                value={searchValue}
                onChange={handleSearch}
                placeholder="Search"
                className={'max-w-4xl w-full'}
              />
              <FilterTag<{ label: string; key: AppStatus }>
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
        data={filteredData}
        isLoading={isLoading}
        onViewDetails={handleViewDetails}
      />
      <Modal
        centered
        width={600}
        footer={null}
        open={openEditUserModal}
        destroyOnClose
        title={selectedUser ? 'Edit User' : 'Add User'}
        className="modal header"
        onCancel={() => {
          setOpenEditUserModal(false)
          setSelectedUser(undefined)
        }}
      >
        <EditUserForm
          user={selectedUser}
          onSubmit={onSubmit}
          isSubmitting={savingUser}
          errorMessage={errorMessage}
          isAdminUser={true}
        />
      </Modal>
      <UserSuccessModal
        openSuccessModal={openSuccessModal}
        newPassword={newPassword}
        newUsername={newUsername}
        setOpenSuccessModal={setOpenSuccessModal}
      />
    </PageContainer>
  )
}

export default ManageUsers
