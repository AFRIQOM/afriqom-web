import React from 'react'
import { Modal } from 'antd'

type Props = {
  title: string
  description: React.ReactNode
  isOpened: boolean
  onClose: () => void
}
function PendingBoardModalContent({
  title,
  onClose,
  description,
  isOpened
}: Props) {
  return (
    <Modal
      destroyOnClose
      centered
      width={600}
      footer={null}
      onCancel={onClose}
      title=""
      open={isOpened}
      className="modal header"
    >
      <div className="my-10">
        <h1 className="text-content-default">{title}</h1>
        <div className="text-content-secondary mb-5">{description}</div>
      </div>
    </Modal>
  )
}

export default PendingBoardModalContent
