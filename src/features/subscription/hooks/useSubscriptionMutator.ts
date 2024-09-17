import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'
import { User } from '@auth/lib/types'
import {
  CreateSubscriptionBody,
  SubscriptionBody
} from '@features/subscription/lib/types'

export function useSubscriptionMutator() {
  const [errorMessage, setErrorMessage] = useState('')

  const updateMudation = useMutator<Partial<SubscriptionBody>, any, User>({
    method: 'save',
    model: 'subscriptions',
    onSuccess: () => {
      notification.success({
        message: 'Subscription saved successfully'
      })
    },
    onError: (error) => {
      setErrorMessage('Error saving subscription')
    }
  })

  const createMudation = useMutator<CreateSubscriptionBody, any, User>({
    method: 'create',
    model: 'Subscriptions',
    onSuccess: () => {
      notification.success({
        message: 'Subscription saved successfully'
      })
    },
    onError: (error) => {
      setErrorMessage('Error creating subscription')
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
    state: {
      isLoading: updateMudation.isPending || createMudation.isPending,
      isUpdating: updateMudation.isPending,
      isCreating: createMudation.isPending,
      errorMessage,
      isSuccess: updateMudation.isSuccess,
      isError: updateMudation.isError
    },
    actions: {
      setErrorMessage,
      create: createMudation.mutate,
      updateSubscription: updateMudation.mutate
    }
  }
}
