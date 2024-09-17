// SuccessModalProps.ts

// SuccessModal.tsx
import React from 'react'
import { Modal, Button, Divider } from 'antd'

interface SuccessModalProps {
  openSuccessModal: boolean
  newUsername: string
  newPassword: string
  setOpenSuccessModal: (open: boolean) => void
}
export const UserSuccessModal: React.FC<SuccessModalProps> = ({
  openSuccessModal,
  newUsername,
  newPassword,
  setOpenSuccessModal
}) => {
  return (
    <Modal
      destroyOnClose
      centered
      width={500}
      footer={null}
      open={openSuccessModal}
      title="User Credentials Updated"
      className="modal header"
      onCancel={() => setOpenSuccessModal(false)}
    >
      <Divider />
      <div className="w-full -my-2 flex justify-between">
        <span className="font-bold">Email:</span> <span>{newUsername}</span>
      </div>
      <Divider />
      <div className="w-full -my-2 flex justify-between">
        <span className="font-bold">Password:</span>
        <div className="flex gap-2 items-center">
          <span>{newPassword}</span>
        </div>
      </div>
      <Divider />
      <div className="flex justify-end">
        <Button onClick={() => setOpenSuccessModal(false)} type="primary">
          Close
        </Button>
      </div>
    </Modal>
  )
}
