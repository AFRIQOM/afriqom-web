import React, { useEffect, useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import OtpInput from 'react-otp-input'

type Props = {
  setTitle: any
  handlePrev: any
  setOtp: any
  otp: string
}
function ForgotPawordFormTwo({ setTitle, handlePrev, setOtp, otp }: Props) {
  useEffect(() => {
    setTitle('')
  }, [])
  return (
    <div>
      <div className="flex gap-3 fkex-row items-center">
        <div className=" cursor-pointer" onClick={handlePrev}>
          <IoArrowBackOutline size={24} />
        </div>
        <h2 className=" text-[#2BA94C]">{'Vérification'}</h2>
      </div>
      <p className="py-5">
        Enter the 4 digits code that you received on your{' '}
        <span className="text-primary">john-deo@gmail.com</span>
      </p>
      <div className=" flex justify-center items-center">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          inputStyle={{
            padding: 25,
            margin: 10,
            borderWidth: 0.7,
            borderColor: '#6e6e6eac',
            fontSize: 22
          }}
          renderInput={(props) => <input {...props} />}
        />
      </div>
    </div>
  )
}

export default ForgotPawordFormTwo
