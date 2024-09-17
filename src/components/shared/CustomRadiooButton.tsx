import classNames from 'classnames'
import React from 'react'

type Props = {
  isSelected?: boolean
}
function CustomRadiooButton({ isSelected }: Props) {
  return (
    <div
      className={classNames(
        'h-5 w-5 flex rounded-full items-center border border-solid-200 justify-center',
        {
          ' bg-primary-default': isSelected,
          ' bg-surface-default': !isSelected
        }
      )}
    >
      {isSelected && (
        <div className=" w-2  h-2 rounded-full bg-accent-default" />
      )}
    </div>
  )
}

export default CustomRadiooButton
