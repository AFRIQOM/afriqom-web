import React from 'react'
import cn from 'classnames'
import { getCountryLabel } from '@lib/utils'
import { Button } from 'antd'
import CustomRadiooButton from '@components/shared/CustomRadiooButton'
import { SubscriptionLicenseType } from '@features/subscription/lib/types'
import { AccessTableData } from '@features/subscription/views/SubscriptionPicker/components/AccessTable'
import { SUBSCRIPTION_RATE_KEY } from '@features/subscription/lib/constants'

type Props = {
  className?: string
  board: AccessTableData
  selectedOption: SubscriptionLicenseType
  handleSelection: (boardId: any, licence: SubscriptionLicenseType) => void
}

function CountrySelector({
  className,
  board,
  handleSelection,
  selectedOption
}: Props) {
  return (
    <div
      className={cn(
        'grid grid-cols-5  border-t border-solid-100 h-20',
        className
      )}
    >
      <div className="flex items-center justify-start gap-4 pr-2">
        {board.country && (
          <img
            src={`/assets/${board.country.toLowerCase()}.png`}
            alt="country"
            className="size-12 rounded-full"
          />
        )}
        {getCountryLabel(board.country)}
      </div>
      {(['Standard', 'Advanced', 'Premium'] as SubscriptionLicenseType[]).map(
        (license) => {
          const isSubscribed =
            board.license?.toLowerCase() === license.toLowerCase()
          const isPending = board.status === 'pending'
          return (
            <div
              className={cn(
                'h-full flex items-center justify-center border-l border-solid-100'
              )}
              key={license}
            >
              {isSubscribed ? (
                <div className="flex items-center justify-center gap-3 border-x border-solid-100">
                  <Button type="primary">Subscribed</Button>
                </div>
              ) : (
                <div
                  className=""
                  onClick={() => handleSelection(board.boardId, license)}
                >
                  <div className="flex cursor-pointer flex-row gap-1 rounded-md border border-solid-100 px-2 py-1.5 font-semibold text-[12]">
                    <CustomRadiooButton
                      isSelected={license === selectedOption}
                    />
                    $ {board[SUBSCRIPTION_RATE_KEY[license]]}
                  </div>
                </div>
              )}
            </div>
          )
        }
      )}
      <div
        className={
          'flex flex-col items-center justify-center border-l border-solid-100 '
        }
      >
        {selectedOption ? (
          <div className={cn('flex flex-col items-center justify-center')}>
            <span
              className={cn({
                'opacity-30': Boolean(board.license)
              })}
            >
              ${' '}
              {selectedOption
                ? board[SUBSCRIPTION_RATE_KEY[selectedOption]]
                : ''}
            </span>
            <span className={'text-content-tertiary'}>
              {board.license ? (
                <a
                  href={'mailto:sales@afriqom.com'}
                  className={'text-blue-500'}
                >
                  Contact Sales
                </a>
              ) : (
                'Annual Cost'
              )}
            </span>
          </div>
        ) : (
          <span className={''} />
        )}
      </div>
    </div>
  )
}

export default CountrySelector
