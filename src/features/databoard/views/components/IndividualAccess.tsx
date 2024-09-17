'use client'
import { Button, Input, Modal } from 'antd'
import { MdDashboardCustomize } from 'react-icons/md'
import SubscriptionTable from '@features/subscription/components/SubscriptionTable'
import { useEffect, useMemo, useState } from 'react'
import { DataboardDraftToDataboardBody } from '@features/databoard/lib/dto'
import {
  Databoard,
  DataboardBody,
  DataboardDraft
} from '@features/databoard/lib/types'
import { useAuth } from '@auth/hooks/useAuth'
import Loading from '@components/ui/Loading'
import EditDataboard from '../components/EditDataboard'
import { hasPermission } from '@lib/user-roles'
import { useSaveDataboard } from '@features/databoard/hooks/useSaveDataboard'
import { useGetDashboards } from '@features/subscription/queries/useDashboards'
import { getCountryLabel } from '@lib/utils'

export default function IndividualAccess() {
  const { data, isLoading, refetch } = useGetDashboards()
  const [selectedDashboard, setSelectedDashboard] = useState<
    Databoard | undefined
  >(undefined)
  const [openEditBoardModal, setOpenEditBoardModal] = useState(false)
  const { state } = useAuth()
  const [searchValue, setSearchValue] = useState('')

  const filteredData = useMemo(() => {
    if (!searchValue) return data
    return data?.filter((item: Databoard) =>
      [item.country.toLowerCase(), getCountryLabel(item.country)].some((el) =>
        el.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
  }, [searchValue, data])

  const handleViewDetails = (dashboard: Databoard) => {
    setSelectedDashboard(dashboard)
    setOpenEditBoardModal(true)
  }

  const saveDataboard = useSaveDataboard()

  const onSubmit = (values: DataboardDraft) => {
    const databoardBody: DataboardBody = DataboardDraftToDataboardBody(values, {
      created_by_id: selectedDashboard?.created_by_id ?? state.user.id
    })
    saveDataboard.actions.saveDataboard(
      { body: databoardBody, id: selectedDashboard?.id },
      {
        onSuccess() {
          refetch()
        }
      }
    )
  }

  useEffect(() => {
    if (saveDataboard.state.isSuccess) {
      setOpenEditBoardModal(false)
    }
  }, [saveDataboard.state.isSuccess])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="px-2  pb-2 overflow-hidden ">
          <div className="flex py-3 justify-between items-center">
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className={'max-w-4xl'}
            />
            {hasPermission(state.user, 'canAddDataboard') && (
              <Button
                onClick={() => setOpenEditBoardModal(true)}
                className="bg-green-500 rounded-lg p-4 m-2 text-white flex items-center justify-center"
                icon={<MdDashboardCustomize />}
              >
                Add
              </Button>
            )}
          </div>
          <SubscriptionTable
            data={filteredData}
            isLoading={false}
            onViewDetails={handleViewDetails}
          />
          <Modal
            centered
            width={700}
            footer={null}
            open={openEditBoardModal}
            title={selectedDashboard ? 'Edit Dashboard' : 'Add DataBoard'}
            onCancel={() => {
              setOpenEditBoardModal(false)
              setSelectedDashboard(undefined)
            }}
            className="bg-black"
            destroyOnClose
          >
            <EditDataboard
              dashboard={selectedDashboard}
              onSubmit={onSubmit}
              isSubmitting={saveDataboard.state.isLoading}
              errorMessage={saveDataboard.state.errorMessage}
            />
          </Modal>
        </div>
      )}
    </>
  )
}
