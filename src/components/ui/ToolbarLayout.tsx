import React from 'react'

type Props = {
  leftControls?: React.ReactNode
  rightControls?: React.ReactNode
}
function ToolbarLayout(props: Props) {
  return (
    <div className={'justify-between flex py-3 w-full'}>
      {props.leftControls}
      {props.rightControls}
    </div>
  )
}

export default ToolbarLayout
