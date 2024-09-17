import React from 'react'
import cn from 'classnames'
import SubscriptionOption from '@features/subscription/views/SubscriptionPicker/components/SubscriptionOption'
import {
  SubscriptionLicenseType,
  SubscriptionStatus
} from '@features/subscription/lib/types'
import CountrySelector from '@features/subscription/views/SubscriptionPicker/components/CountrySelector'

export type AccessTableData = {
  boardId: string
  country?: string
  license?: SubscriptionLicenseType
  standard_rate: string
  advanced_rate: string
  premium_rate: string
  status?: SubscriptionStatus
}

type Props = {
  data: AccessTableData[]
  selectedSubscription: Record<string, SubscriptionLicenseType>
  setSelectedSubscription: (
    value: Record<string, SubscriptionLicenseType>
  ) => void
}

const options = [
  { name: 'Standard', data: ['Add up to 5 users', 'Read only'] },
  { name: 'Advanced', data: ['Add up to 10 users', 'Read & Download'] },
  { name: 'Premium', data: ['Add up to 15 users', 'Read & Download'] }
]

function AccessTable({
  data,
  selectedSubscription,
  setSelectedSubscription
}: Props) {
  return (
    <div className="">
      <>
        <div className="grid grid-cols-6 gap-4  ">
          <div className="col-start-1 col-end-7 -mt-4">
            <div className="grid grid-cols-5 ">
              <div></div>
              {options.map((item, i) => (
                <SubscriptionOption
                  className={cn({
                    ' border-l': i !== 2,
                    'border-r': i == 1,
                    'border-r *:': i == 2
                  })}
                  option={item}
                  key={i}
                />
              ))}
              <div></div>
            </div>
          </div>
          <div className="col-start-1 col-end-7 -mt-4">
            <div className=" flex flex-col">
              {data &&
                data.map((el) => (
                  <CountrySelector
                    className={''}
                    board={el}
                    selectedOption={selectedSubscription[el.boardId]}
                    handleSelection={(id, licence) => {
                      const temp = { ...selectedSubscription }
                      if (temp[id] && temp[id] === licence) {
                        delete temp[id]
                      } else {
                        temp[id] = licence
                      }
                      setSelectedSubscription(temp)
                    }}
                    key={el.boardId}
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default AccessTable
