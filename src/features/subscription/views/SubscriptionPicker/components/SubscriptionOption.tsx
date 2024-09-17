import React from 'react'
import classNames from 'classnames'

type Props = {
  className: string
  option: {
    name: string
    data: string[]
  }
}
function SubscriptionOption({ option, className }: Props) {
  return (
    <div
      className={classNames(
        'flex justify-center items-center flex-col pb-3  border-solid-100 ',
        className
      )}
    >
      <div className="py-3 text-center px-20">
        <span className="  bg-light-default text-light-contrast rounded-xl py-1 px-3 text-base ">
          {option.name}
        </span>
      </div>
      <div className="flex  flex-col items-start">
        {option.data.map((item, i) => (
          <div
            key={i}
            className="flex flex-row justify-center items-center gap-3 py-1"
          >
            <div className=" bg-primary-default h-6 w-6   justify-center items-center flex rounded-full">
              ✔️
            </div>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubscriptionOption
