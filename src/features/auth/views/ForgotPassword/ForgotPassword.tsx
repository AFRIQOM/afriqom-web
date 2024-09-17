import Layout from '@auth/components/Layout'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'
import { Button } from 'antd'

function ForgotPassword() {
  const navigate = useNavigate()
  return (
    <Layout
      onArrowBack={() => {
        navigate(AppRoutes.login)
      }}
      title={'Forgot Your Password?'}
    >
      <div className={'md:w-[95%] my-10'}>
        If you've forgotten your password, please contact our{' '}
        <a href={'mailto:sales@afriqom.com'}>sales support team</a> for
        assistance. Our team will help you reset your password as quickly as
        possible.{' '}
      </div>
      <Button className={'no-underline'} href={'mailto:sales@afriqom.com'}>
        Contact Us
      </Button>
    </Layout>
  )
}

export default ForgotPassword
