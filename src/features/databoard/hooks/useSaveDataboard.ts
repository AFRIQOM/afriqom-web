import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'
import { User } from '@auth/lib/types'
import { Databoard, DataboardBody } from '../lib/types'

export function useSaveDataboard() {
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isPending, isSuccess, isError } = useMutator<
    DataboardBody,
    any,
    Databoard
  >({
    method: 'save',
    model: 'databoards',
    onSuccess: (response) => {
      notification.success({
        message: 'Databoard saved successfully',
        placement: 'topRight'
      })
    },
    onError: (error) => {
      setErrorMessage('Error creating databoard')
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
      saveDataboard: mutate
    }
  }
}
