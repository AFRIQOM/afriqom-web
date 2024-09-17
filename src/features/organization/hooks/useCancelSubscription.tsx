import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'

export function useCancelSubscription() {
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isPending, isSuccess, isError } = useMutator<
    { id: string },
    any
  >({
    method: 'cancel',
    model: 'Subscription',
    onSuccess: (response) => {
      notification.success({
        message: 'Subscription canceled successfully',
        placement: 'topRight'
      })
    },
    onError: (error) => {
      setErrorMessage('Error canceling subscription')
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
      cancelSubscription: mutate
    }
  }
}
