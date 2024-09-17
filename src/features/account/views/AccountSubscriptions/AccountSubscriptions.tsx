import { Button, Modal, notification, Tag } from 'antd'
import React, { Fragment, useState } from 'react'
import { MdDashboardCustomize } from 'react-icons/md'
import { useAuth } from '@auth/hooks/useAuth'
import { hasPermission } from '@lib/user-roles'
import { Link } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'
import { useSubscriptionMutator } from '@features/subscription/hooks/useSubscriptionMutator'
import EditSubscriptionForm from '@features/subscription/components/EditSubscriptionForm'
import {
  CreateSubscriptionBody,
  Subscription,
  SubscriptionBody,
  SubscriptionDraft,
  SubscriptionType
} from '@features/subscription/lib/types'
import { subscriptionDraftToBody } from '@features/subscription/lib/dto'
import { Organization } from '@features/organization/lib/types'
import SubscriptionTable from '@features/account/views/AccountSubscriptions/SubscriptionTable/SubscriptionTable'
import { useOrganizationHandler } from '@features/account/hooks/useOrganizationHandler'
import UpgradeModalContent from './components/UpgradeModalContent'
import FullAccessContent from './components/FullAccessContent'
import { SUBSCRIPTION_RATE_KEY } from '@features/subscription/lib/constants'
import { useGetRegionDataboards } from '@features/databoard/queries/UseRegionDatabords'
import { useQueryClient } from '@tanstack/react-query'
import { useCancelSubscription } from '@features/organization/hooks/useCancelSubscription'

type Props = {
  currentOrganisation: Organization
}
function AccountSubscriptions({ currentOrganisation }: Props) {
  const {
    subscriptions,
    databoards,
    isFullAccess,
    fullAccess,
    refetchSubscription
  } = useOrganizationHandler()

  const client = useQueryClient()
  const cancelSubscription = useCancelSubscription()
  const { data: regionBoard, isLoading: loadingRegionBoard } =
    useGetRegionDataboards()

  const [openUpgradeModal, setOpenUpgradeModal] = useState(false)
  const [openCancelModal, setOpenCancelModal] = useState(false)
  const [editControl, setEditControl] = useState<{
    isOpen: boolean
    subscriptionType?: SubscriptionType
    subscription?: Subscription
  }>({ isOpen: false, subscriptionType: 'Full Access' })

  const { state } = useAuth()
  const subscriptionHandler = useSubscriptionMutator()
  const { user, isClientUser } = useAuth().state

  const handleOnSubmit = (draft: SubscriptionDraft) => {
    if (!regionBoard)
      return notification.error({ message: 'Region board not found' })
    if (!editControl.subscriptionType)
      return notification.error({ message: 'Missing Subscription type' })

    const isEditMode = Boolean(editControl.subscription)

    const licenseRate =
      editControl.subscriptionType == 'Full Access'
        ? regionBoard[0][SUBSCRIPTION_RATE_KEY[draft.license]]
        : databoards?.find((el) => el.id === draft.databoard_id)?.[
            SUBSCRIPTION_RATE_KEY[draft.license]
          ]

    const finalRatePaid =
      draft.license == 'Custom' ? draft.rate_paid : licenseRate

    if (!finalRatePaid) return notification.error({ message: 'Missing Rate' })

    const payload: SubscriptionBody = {
      ...subscriptionDraftToBody(draft),
      package: editControl.subscriptionType,
      rate_paid: finalRatePaid,
      organisation_id: currentOrganisation?.id,
      ...(editControl.subscription && { id: editControl.subscription.id })
    }

    if (isEditMode) {
      subscriptionHandler.actions.updateSubscription(
        {
          body: payload,
          id: editControl.subscription?.id
        },
        {
          onSuccess() {
            setEditControl({ subscription: undefined, isOpen: false })
            return refetchSubscription()
          }
        }
      )
    } else {
      let createSubscriptionPayload: CreateSubscriptionBody | undefined =
        undefined

      if (editControl.subscriptionType == 'Full Access') {
        createSubscriptionPayload = {
          region_id: regionBoard[0].id,
          organisation_id: currentOrganisation.id,
          license: payload.license,
          rate_paid: payload.rate_paid,
          start_date: payload.start_date,
          expiry_date: payload.expiry_date,
          package: editControl.subscriptionType
        }
      } else if (payload.databoard_id) {
        createSubscriptionPayload = {
          organisation_id: currentOrganisation.id,
          package: editControl.subscriptionType,
          databoards: [
            {
              databoard_id: payload.databoard_id,
              license: payload.license,
              rate_paid: payload.rate_paid,
              start_date: payload.start_date,
              expiry_date: payload.expiry_date
            }
          ]
        }
      }
      if (createSubscriptionPayload) {
        subscriptionHandler.actions.create(
          { body: createSubscriptionPayload },
          {
            onSuccess() {
              client.refetchQueries({ queryKey: ['list', 'organisations'] })
              setEditControl({ subscription: undefined, isOpen: false })
              return refetchSubscription()
            }
          }
        )
      }
    }
  }
  const onCancelSubscription = () => {
    cancelSubscription.actions.cancelSubscription(
      { body: { id: editControl!.subscription!.id } },
      {
        onSuccess() {
          setOpenCancelModal(false)
          setEditControl({ subscription: undefined, isOpen: false })
          return refetchSubscription()
        }
      }
    )
  }

  return (
    <div className="w-full">
      {!isFullAccess && (
        <div className="mb-4 flex items-end justify-between md:items-center">
          <div className="flex flex-col md:flex-row md:gap-3">
            <p className="text-content-secondary">Manage Subscriptions</p>
            <Tag color="#2ba94c">{state.currentOrganisation?.subscription}</Tag>
          </div>
          {hasPermission(user, 'canAddAccountSubscription') && (
            <Fragment>
              {isClientUser ? (
                <Link to={`${AppRoutes.buySubscription}`}>
                  <Button type="primary" icon={<MdDashboardCustomize />}>
                    Add
                  </Button>
                </Link>
              ) : (
                <div className="item-center flex gap-3">
                  <Button
                    icon={<MdDashboardCustomize />}
                    type="primary"
                    onClick={() => {
                      setEditControl({
                        isOpen: true,
                        subscriptionType: 'Individual Access'
                      })
                    }}
                  >
                    Add
                  </Button>
                  {!isClientUser && (
                    <Button
                      onClick={() => {
                        setEditControl({
                          isOpen: true,
                          subscriptionType: 'Full Access'
                        })
                      }}
                    >
                      Upgrade to Full Access
                    </Button>
                  )}
                </div>
              )}
            </Fragment>
          )}
        </div>
      )}

      {state.currentOrganisation?.subscription === 'Full Access' ? (
        <FullAccessContent
          buttonLabel={isClientUser ? 'Upgrade' : 'Edit'}
          showUpgradeButton={hasPermission(user, 'canAddAccountSubscription')}
          onUpgrade={() => {
            if (isClientUser) return setOpenUpgradeModal(true)
            setEditControl({
              isOpen: true,
              subscriptionType: 'Full Access',
              subscription: fullAccess
            })
          }}
        />
      ) : (
        <React.Fragment>
          <SubscriptionTable
            onCancel={() => {
              setOpenCancelModal(true)
              setEditControl({
                isOpen: false,
                subscriptionType: 'Individual Access'
              })
            }}
            data={subscriptions}
            isLoading={false}
            onExtendSubscription={() => {
              setOpenUpgradeModal(true)
            }}
            onViewDetails={(record) => {
              setEditControl({
                isOpen: true,
                subscriptionType: 'Individual Access',
                subscription: record
              })
            }}
          />
        </React.Fragment>
      )}
      <Modal
        destroyOnClose
        centered
        width={600}
        footer={null}
        open={openUpgradeModal}
        title="Upgrade subscription"
        className="modal header"
        onCancel={() => setOpenUpgradeModal(false)}
      >
        <UpgradeModalContent />
      </Modal>
      <Modal
        destroyOnClose
        width={500}
        footer={null}
        open={editControl.isOpen}
        title={
          editControl.subscriptionType == 'Full Access' &&
          !editControl.subscription
            ? 'Upgrade to Full Access'
            : 'Edit Subscription'
        }
        className="modal header"
        onCancel={() => {
          setEditControl({ isOpen: false, subscription: undefined })
        }}
      >
        <EditSubscriptionForm
          packageType={editControl.subscriptionType}
          subscription={editControl.subscription}
          errorMessage={subscriptionHandler.state.errorMessage}
          onSubmit={handleOnSubmit}
          isSubmitting={subscriptionHandler.state.isLoading}
        />
      </Modal>
      <Modal
        open={openCancelModal}
        footer={false}
        closeIcon={false}
        className="mt-20"
        width={500}
      >
        <div className="m-auto my-5 flex w-full max-w-md items-center justify-center text-lg">
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="font-bold">
              Are you sure you want to cancel this subscription?
            </p>
            <p>This action cannot be undone.</p>
          </div>
        </div>
        <div className="mx-auto mt-10 flex w-full max-w-sm items-center gap-5">
          <Button className="w-full" onClick={() => setOpenCancelModal(false)}>
            Cancel
          </Button>
          <Button
            className="w-full"
            type="primary"
            onClick={() => onCancelSubscription()}
            loading={cancelSubscription.state.isLoading}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default AccountSubscriptions
