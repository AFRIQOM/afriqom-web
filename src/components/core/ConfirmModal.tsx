import React from 'react'
import { Button, Modal } from 'antd'

type Props = {
  isOpen: boolean
  onCancel: (value: boolean) => void
  isLoading: boolean
  onConfirm: () => void
}
function ConfirmModal({ isOpen, isLoading, onConfirm, onCancel }: Props) {
  return (
    <Modal
      open={isOpen}
      footer={false}
      closeIcon={false}
      className="mt-20"
      width={500}
    >
      <div className="m-auto my-5 flex w-full max-w-md text-lg">
        <div className="flex flex-col justify-center gap-2">
          <p className="font-bold">
            Are you sure you want to cancel this subscription?
          </p>
          <p className={'text-sm'}>This action cannot be undone.</p>
        </div>
      </div>
      <div className="flex gap-x-2 mt-10">
        <Button className="w-full" onClick={() => onCancel(false)}>
          Cancel
        </Button>
        <Button
          className="w-full"
          type="primary"
          onClick={onConfirm}
          loading={isLoading}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  )
}

export default ConfirmModal
