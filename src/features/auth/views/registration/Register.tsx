import Layout from '@auth/components/Layout'
import RegistrationForm from '@auth/components/registration/RegistrationForm'
import { useCreateAccount } from '@auth/hooks/useCreateAccount'
import { AccountToAccountBody } from '@auth/lib/dto'
import { AccountBody, AccountFormDraft } from '@auth/lib/types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'
import { useAuth } from '@auth/hooks/useAuth'

function Register() {
  const navigate = useNavigate()
  const {
    actions: { setPreviewUser }
  } = useAuth()
  const [title, setTitle] = useState('Create Account')
  const createAccount = useCreateAccount()
  const onRegister = (values: AccountFormDraft) => {
    const body: AccountBody = AccountToAccountBody(values)

    createAccount.actions.createAccount(
      { body: body },
      {
        onSuccess() {
          setPreviewUser({ email: values.email, fullName: values.name })
          navigate(AppRoutes.welcome + '?isSuccess=true')
        }
      }
    )
  }
  return (
    <Layout title={title}>
      <RegistrationForm
        signUp={onRegister}
        loading={createAccount.state.isLoading}
        errorMessage={createAccount.state.errorMessage}
      />
    </Layout>
  )
}

export default Register
