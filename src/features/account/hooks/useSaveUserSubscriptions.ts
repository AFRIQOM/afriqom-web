import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'
import { User, UserBody } from '@auth/lib/types'

export function useSaveUserSubscription() {
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isPending, isSuccess, isError } = useMutator<
    UserBody,
    any,
    User
  >({
    method: 'save',
    model: 'user_subscriptions',
    onSuccess: (response) => {
      notification.success({
        message: 'User subscription saved successfully',
        placement: 'topRight'
      })
    },
    onError: (error) => {
      setErrorMessage('Error creating user')
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
      saveUserSubscription: mutate
    }
  }
}
