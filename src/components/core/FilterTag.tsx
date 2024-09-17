import { IoCheckmarkSharp, IoChevronDown, IoClose } from 'react-icons/io5'
import { useState } from 'react'
import cn from 'classnames'
import { Popover } from 'antd'
import { LoadingSpinner } from '@components/shared/LoadingSpinner'

type Props<Data> = {
  value?: Data
  options?: Data[]
  isLoading?: boolean
  label: string
  title: string
  renderLabel: (data: Data) => string
  onChange: (data?: Data) => void
  widget?: 'select' | 'date'
  isSelected?: (data: Data) => boolean
}

export default function FilterTag<Data>({
  value,
  onChange,
  renderLabel,
  isLoading,
  label,
  title,
  options = [],
  widget = 'select',
  isSelected
}: Props<Data>) {
  const isActive = Boolean(value)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="">
      <Popover
        open={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottomRight"
        trigger={'click'}
        arrow={false}
        overlayStyle={{
          width: '150px'
        }}
        content={
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
            <div className="relative max-h-[400px] min-w-[250px] overflow-y-auto ">
              <div className={'pb-2 pl-2 text-sm text-content-tertiary'}>
                {title}
              </div>
              {widget == 'select' && (
                <div className={'space-y-0.5'}>
                  {isLoading && <LoadingSpinner />}
                  {!isLoading &&
                    options.map((el, index) => {
                      const isActive = isSelected?.(el)
                      return (
                        <div
                          key={index}
                          className={cn(
                            'flex text-sm justify-between cursor-pointer items-center hover:bg-surface-default text-content-default px-2 py-1 rounded-sm',
                            isActive ? 'bg-light-default' : ''
                          )}
                          onClick={() => {
                            onChange(isActive ? undefined : el)
                            setIsOpen(false)
                          }}
                        >
                          <span> {renderLabel?.(el)}</span>
                          {isActive && <IoCheckmarkSharp />}
                        </div>
                      )
                    })}
                </div>
              )}
            </div>
          </div>
        }
      >
        <button
          className={cn(
            'flex gap-x-2 px-2 py-2 rounded-md text-sm font-medium min-w-[80px]',
            isActive
              ? 'bg-primary-default text-primary-contrast'
              : 'bg-surface-tertiary text-content-default'
          )}
        >
          <span>
            {label}
            {value ? `: ${renderLabel(value)}` : ''}
          </span>
          <div className="flex justify-between gap-x-1">
            <IoChevronDown
              className={`
                size-5 opacity-60 transition duration-150 ease-in-out`}
              aria-hidden="true"
            />
            {isActive && (
              <IoClose
                className={`
                 size-5 opacity-60`}
                onClick={(e) => {
                  e.stopPropagation()
                  onChange(undefined)
                  close()
                }}
              />
            )}
          </div>
        </button>
      </Popover>
    </div>
  )
}
