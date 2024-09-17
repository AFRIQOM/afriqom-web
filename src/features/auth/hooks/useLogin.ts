import { useEffect, useState } from 'react'
import { useAuth } from './useAuth'
import { notification } from 'antd'
import { SignInBody } from '@auth/lib/types'
import { useMutation } from '@tanstack/react-query'
import { authApi } from '@auth/lib/api'
import { logger } from '@lib/logger'
import { ApiError } from '@lib/api/error'

export function useLogin() {
  const { actions } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: SignInBody) => authApi.login(payload),
    onSuccess: (response) => {
      notification.success({
        message: 'Login successful',
        placement: 'topRight'
      })
      actions.onLoginSuccess(response)
    },
    onError: (error: ApiError) => {
      if (error.status === 401) {
        setErrorMessage(
          'Sorry, but this account is not accessible from your country. If you believe this is a mistake or need further assistance, please contact our support team.'
        )
      } else {
        setErrorMessage('Incorrect email or password')
      }
      logger('log in error', error.status, error.message)
    }
  })

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 10000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [errorMessage])

  useEffect(() => {
    if (isPending) {
      setErrorMessage('')
    }
  }, [isPending])

  return {
    state: { isLoading: isPending, errorMessage },
    actions: {
      setErrorMessage,
      login: mutate
    }
  }
}
