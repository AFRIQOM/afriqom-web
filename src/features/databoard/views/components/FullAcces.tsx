'use client'
import { RegionDataboradBody } from '@features/databoard/lib/types'
import { useAuth } from '@auth/hooks/useAuth'
import Loading from '@components/ui/Loading'
import EditRegionBoardForm from './EditRegionBoardForm'
import { RegionBoardDraftToRegionBoardBody } from '@features/databoard/lib/dto'
import { useGetRegionDataboards } from '@features/databoard/queries/UseRegionDatabords'
import { useSaveRegionBoard } from '@features/databoard/hooks/useSaveRegionBoard'

export default function FullAccess() {
  const { data, isLoading } = useGetRegionDataboards()
  const { state } = useAuth()

  const saveRegionBoard = useSaveRegionBoard()
  const onSubmit = (values: any) => {
    const regionboardBody: RegionDataboradBody =
      RegionBoardDraftToRegionBoardBody(values, {
        created_by_id: state.user.id
      })
    saveRegionBoard.actions.saveRegionBoard({
      body: regionboardBody,
      id: data?.[0].id
    })
  }

  return (
    <div className="max-w-3xl">
      {isLoading && <Loading />}
      {data && (
        <EditRegionBoardForm
          regionBoard={data[0]}
          onSubmit={onSubmit}
          isSubmitting={saveRegionBoard.state.isLoading}
          errorMessage={saveRegionBoard.state.errorMessage}
        />
      )}
    </div>
  )
}
