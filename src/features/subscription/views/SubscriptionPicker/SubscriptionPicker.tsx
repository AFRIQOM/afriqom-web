import CustomRadiooButton from '@components/shared/CustomRadiooButton'
import classNames from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'
import AccessTable, { AccessTableData } from './components/AccessTable'
import {
  SubscriptionFullAccessBody,
  SubscriptionIndividualBody,
  SubscriptionLicenseType,
  SubscriptionType
} from '@features/subscription/lib/types'
import CustomAcces from '@features/subscription/views/SubscriptionPicker/components/CustomAcces'
import { Button, Spin } from 'antd'
import Loading from '@components/ui/Loading'
import { useOrganizationHandler } from '@features/account/hooks/useOrganizationHandler'
import { useGetRegionDataboards } from '@features/databoard/queries/UseRegionDatabords'
import { useSubscriptionMutator } from '@features/subscription/hooks/useSubscriptionMutator'
import { Organization } from '@features/organization/lib/types'
import dayjs from 'dayjs'
import { SUBSCRIPTION_RATE_KEY } from '@features/subscription/lib/constants'

export type BoardId = string
type Props = {
  organization: Organization
  onCompleted: () => void
}
export type AccessData = {
  id: string
  name: SubscriptionType | 'Custom'
  description: string
  discount?: number
  isRecommended?: boolean
  data?: AccessTableData[]
}[]

const typedLowerCost = <T extends string>(data: T): T => {
  return data.toLowerCase() as any
}

function SubscriptionPicker({ organization, onCompleted }: Props) {
  const {
    organizationBoards: OrganizationBoard,
    subscriptions,
    isLoading,
    databoards,
    refetchSubscription
  } = useOrganizationHandler()
  const { data: regionBoard } = useGetRegionDataboards()
  const [selectedAccess, setSelectedAccess] = useState<
    AccessData[0]['name'] | undefined
  >(undefined)

  const [selectedData, setSelectData] = useState<
    AccessTableData[] | undefined
  >()
  const [data, setData] = useState<AccessData | undefined>()

  useEffect(() => {
    if (data) return
    if (!OrganizationBoard || OrganizationBoard.length == 0 || !regionBoard)
      return
    const fullAccess = subscriptions?.find((el) => el.package === 'Full Access')
    const payload: AccessData = [
      {
        id: '1',
        name: 'Individual Access',
        description: 'Get access to all countries',
        data: OrganizationBoard.map((el) => ({
          ...el,
          boardId: el.databoard_id,
          license: fullAccess ? undefined : el.license
        }))
      },
      {
        id: '2',
        name: 'Full Access',
        description: 'Get access ao all countries',
        isRecommended: true,
        discount: 40,
        data: regionBoard.map((el) => ({
          ...el,
          boardId: el.id,
          ...fullAccess
        }))
      },
      {
        id: '3',
        name: 'Custom',
        description: 'Tailored to your preferences'
      }
    ]
    setData(payload)
    setSelectedAccess('Individual Access')
    setSelectData(payload[0].data)
  }, [OrganizationBoard, data, regionBoard, subscriptions])

  const [selectedSubscription, setSelectedSubscription] = useState<
    Record<BoardId, SubscriptionLicenseType>
  >({})

  const total = useMemo(() => {
    if (!selectedData) return 0
    return Object.entries(selectedSubscription).reduce(
      (acc, [boardId, selectedLicense]) => {
        const board = selectedData.find((el) => el.boardId === boardId)
        if (board && !board.license) {
          return (
            acc + Number(board[SUBSCRIPTION_RATE_KEY[selectedLicense]] ?? 0)
          )
        }
        return acc
      },
      0
    )
  }, [selectedData, selectedSubscription])

  const subscriptionHandler = useSubscriptionMutator()

  const onSubscribe = () => {
    if (!databoards || !regionBoard || !selectedData) return
    if (selectedAccess == 'Individual Access') {
      const Payload: SubscriptionIndividualBody = {
        organisation_id: organization.id,
        package: selectedAccess,
        databoards: Object.entries(selectedSubscription)
          .filter(([boardId]) => {
            const board = selectedData.find((el) => el.boardId === boardId)
            return !board?.license
          })
          .map(([boardId, license]) => {
            const dashboard = databoards.find((el) => el.id === boardId)
            if (!dashboard) throw new Error('No dashboard found')
            const oneYearFromNow = new Date(
              new Date().setFullYear(new Date().getFullYear() + 1)
            )
            return {
              databoard_id: boardId,
              license: license,
              rate_paid: dashboard[SUBSCRIPTION_RATE_KEY[license]],
              start_date: dayjs(new Date().toISOString()).format('YYYY-MM-DD'),
              expiry_date: dayjs(oneYearFromNow.toISOString()).format(
                'YYYY-MM-DD'
              )
            }
          })
      }
      subscriptionHandler.actions.create(
        { body: Payload },
        {
          onSuccess() {
            onCompleted()
            return refetchSubscription()
          }
        }
      )
    } else if (selectedAccess == 'Full Access') {
      const [boardId, license] = Object.entries(selectedSubscription)[0]
      const region = regionBoard.find((el) => el.id === boardId)!
      if (!region) throw new Error('No dashboard found')
      const oneYearFromNow = new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
      const Payload: SubscriptionFullAccessBody = {
        region_id: region?.id,
        organisation_id: organization.id,
        license: license,
        rate_paid: region[SUBSCRIPTION_RATE_KEY[license]],
        start_date: dayjs(new Date().toISOString()).format('YYYY-MM-DD'),
        expiry_date: dayjs(oneYearFromNow.toISOString()).format('YYYY-MM-DD'),
        package: selectedAccess
      }
      subscriptionHandler.actions.create(
        { body: Payload },
        {
          onSuccess() {
            onCompleted()
            refetchSubscription()
          }
        }
      )
    }
  }

  return (
    <div>
      {isLoading && <Loading />}
      {data && selectedAccess && (
        <Spin spinning={subscriptionHandler.state.isCreating} className="py-5">
          <div className=" mb-16 grid grid-cols-3 gap-4">
            {data.map((item, i) => (
              <div
                onClick={() => {
                  setSelectedAccess(item.name as any)
                  setSelectData(item.data)
                  setSelectedSubscription({})
                }}
                key={i}
                className={classNames(
                  'py-3 px-3 cursor-pointer rounded-md border',
                  {
                    'border-5 border-primary-default bg-light-default ':
                      selectedAccess === item.name,
                    'border-5 border-solid-100 bg-surface-secondary':
                      selectedAccess !== item.name
                  }
                )}
              >
                <div className="flex flex-row items-center gap-3">
                  <CustomRadiooButton
                    isSelected={selectedAccess === item.name}
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-2">
                      <span className=" text-lg font-bold">{item.name}</span>
                      {item.discount && (
                        <div className=" rounded-2xl  bg-primary-secondary p-1 text-xs font-light text-primary-default">
                          save {item?.discount}%
                        </div>
                      )}
                    </div>
                    <span className="text-xs">{item.description}</span>
                    {item.isRecommended && (
                      <span
                        className={classNames(
                          'text-sm font-bold text-primary-default'
                        )}
                      >
                        Recommended
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 min-h-[50vh]">
            {selectedAccess == 'Custom' ? (
              <CustomAcces />
            ) : (
              <AccessTable
                selectedSubscription={selectedSubscription}
                setSelectedSubscription={setSelectedSubscription}
                data={selectedData ?? []}
              />
            )}
          </div>
          <div
            className={classNames('flex mt-12', {
              'justify-between': selectedAccess === 'Individual Access',
              'justify-end': selectedAccess !== 'Individual Access'
            })}
          >
            {selectedAccess === 'Individual Access' && (
              <div
                onClick={() => {
                  setSelectedAccess('Full Access')
                  setSelectData(data[1].data)
                }}
                className="cursor-pointer text-sm font-bold text-primary-default underline"
              >
                Upgrade to full access and save 40%
              </div>
            )}
            {selectedAccess !== 'Custom' && (
              <div className={'w-[250px]'}>
                <div className="mb-2 flex w-full items-center justify-between text-lg">
                  <span className="font-bold text-content-tertiary">
                    Total:
                  </span>
                  <div className="font-bold text-primary-default">
                    $ {total}
                  </div>
                </div>
                <Button
                  disabled={total == 0}
                  onClick={onSubscribe}
                  className="w-full"
                  type="primary"
                >
                  Subscribe
                </Button>
              </div>
            )}
          </div>
        </Spin>
      )}
    </div>
  )
}

export default SubscriptionPicker
