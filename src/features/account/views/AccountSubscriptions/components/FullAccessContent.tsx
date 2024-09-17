import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { useOrganizationHandler } from '@features/account/hooks/useOrganizationHandler'
import StatusTag from '@components/ui/StatusTag'
import { useAuth } from '@auth/hooks/useAuth'
import { useIntl } from 'react-intl'
import { hasPermission } from '@lib/user-roles'
import { useCancelFullSubscription } from '@features/account/hooks/useCancelFullSubbcription'
import ConfirmModal from '@components/core/ConfirmModal'
import { useQueryClient } from '@tanstack/react-query'

type Props = {
  onUpgrade: () => void
  showUpgradeButton: boolean
  buttonLabel: string
}
function FullAccessContent({
  onUpgrade,
  buttonLabel,
  showUpgradeButton
}: Props) {
  const { fullAccess, refetchSubscription } = useOrganizationHandler()
  const { actions, state } = useAuth()
  const cancelFullSubscription = useCancelFullSubscription()
  const [openCancelModal, setOpenCancelModal] = useState(false)
  const [currentOrgId, setCurrentOrgId] = useState<string | null>(null)
  const intl = useIntl()
  const client = useQueryClient()

  const onCancelSubscription = () => {
    if (!currentOrgId) return
    cancelFullSubscription.actions.cancelFullSubscription(
      { body: { organisation_id: currentOrgId } },
      {
        onSuccess() {
          setOpenCancelModal(false)
          refetchSubscription()
          client.refetchQueries({ queryKey: ['list', 'organisations'] })
        }
      }
    )
  }

  const handleOpenCancelModal = () => {
    if (state.currentOrganisation?.id) {
      setCurrentOrgId(state.currentOrganisation.id)
      setOpenCancelModal(true)
    } else {
      console.error('Organization ID is not available.')
    }
  }
  return (
    <div className="w-full">
      <h2 className="my-5">Active Plan</h2>
      {fullAccess && (
        <div className="flex size-full flex-col items-center justify-between gap-5 rounded-xl bg-surface-tertiary  p-5 md:flex-row">
          <div className={'space-y-2'}>
            <div className="flex items-center gap-1">
              <h1 className="text-lg sm:text-2xl">Full Access</h1>
              <StatusTag status={actions.mapAuthStatus(fullAccess.status)} />
            </div>
            <h3 className="font-normal">{fullAccess.license} Access </h3>
            <p className="text-content-secondary">
              Expires on {fullAccess.expiry_date}
            </p>
            <p className="text-content-secondary">
              Annual Cost Paid: $
              {intl.formatNumber(Number(fullAccess.rate_paid))}
            </p>
          </div>
          <div className="w-[150px] flex flex-col items-center gap-2">
            {showUpgradeButton && (
              <Button
                className={'w-full'}
                type="primary"
                onClick={() => {
                  onUpgrade()
                }}
              >
                {buttonLabel}
              </Button>
            )}
            {hasPermission(state.user, ['canCancelSubscription']) && (
              <Button className={'w-full'} onClick={handleOpenCancelModal}>
                Cancel Subscription
              </Button>
            )}
          </div>
        </div>
      )}
      <ConfirmModal
        isLoading={cancelFullSubscription.state.isLoading}
        isOpen={openCancelModal}
        onCancel={setOpenCancelModal}
        onConfirm={() => onCancelSubscription()}
      />
    </div>
  )
}

export default FullAccessContent

// onClick={() => actions.cancelSubscription(fullAccess)}
