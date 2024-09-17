import { Button, Input, Modal } from 'antd'
import { useState } from 'react'
import { IoMapOutline } from 'react-icons/io5'
import { MdOutlineDashboard } from 'react-icons/md'

type Props = {
  selected: number
  setSelected: (value: number) => void
}
function ToggleButtons({ selected, setSelected }: Props) {
  return (
    <div className="bg-surface-default flex justify-between gap-4 p-1 border">
      <Button
        className={`flex items-center justify-center border-none  
           ${selected === 0 ? 'bg-primary-default text-primary-contrast' : ''}`}
        onClick={() => setSelected(0)}
      >
        <IoMapOutline size={12} />
      </Button>
      <Button
        className={`flex items-center justify-center border-none 
            ${
              selected === 1 ? 'bg-primary-default text-primary-contrast' : ''
            }`}
        onClick={() => setSelected(1)}
      >
        <MdOutlineDashboard size={12} />
      </Button>
    </div>
  )
}

export default ToggleButtons
