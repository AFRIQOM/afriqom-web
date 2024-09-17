import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'
import { AccountBody, User, UserBody } from '@auth/lib/types'

export function useCreateAccount() {
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isPending, isSuccess, isError } = useMutator<
    AccountBody,
    any,
    User
  >({
    method: 'signup',
    model: 'Accounts',
    onSuccess: (response) => {
      notification.success({
        message: 'Account created successfully',
        placement: 'topRight'
      })
    },
    onError: (error) => {
      setErrorMessage(error ?? 'Something went wrong')
    }
  })

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 5000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [errorMessage])

  return {
    state: { isLoading: isPending, errorMessage, isSuccess, isError },
    actions: {
      setErrorMessage,
      createAccount: mutate
    }
  }
}
