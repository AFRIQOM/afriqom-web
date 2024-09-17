import React, { useEffect } from 'react'
import success from '../../../../../assets/success.png'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
type Props = {
  setTitle: any
}
function ForgotPawordFormSuccess({ setTitle }: Props) {
  useEffect(() => {
    setTitle('')
  }, [])

  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center py-16">
      <img src={success} alt="success_iconn" />
      <p className=" text-primary text-4xl">Successful</p>
      <p className=" text-center text-base">
        Your password has been reset successfully
      </p>
      <Button
        className={'mt-7 !min-w-min'}
        color={'primary'}
        onClick={() => navigate('/login')}
        loading={false}
      >
        Continue
      </Button>
    </div>
  )
}

export default ForgotPawordFormSuccess
