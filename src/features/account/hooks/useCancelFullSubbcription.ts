import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'

export function useCancelFullSubscription() {
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isPending, isSuccess, isError } = useMutator<
    { organisation_id: string },
    any
  >({
    method: 'cancel',
    model: 'License',
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
      cancelFullSubscription: mutate
    }
  }
}
