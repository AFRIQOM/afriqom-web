import React from 'react'
import Layout from '@auth/components/Layout'
import RegistrationSuccess from '@auth/components/registration/RegisterSuccess'
import { useAuth } from '@auth/hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'

function Onboarding() {
  const { state } = useAuth()

  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const isSuccess = query.get('isSuccess')

  if (!state.previewUser) return <Navigate to={AppRoutes.login} />

  return (
    <Layout title={isSuccess ? 'Thank you for registering!' : 'Welcome Back'}>
      {state.previewUser && (
        <RegistrationSuccess
          message={state.previewUser.message}
          full_name={state.previewUser.fullName}
          email={state.previewUser.email}
        />
      )}
    </Layout>
  )
}

export default Onboarding
