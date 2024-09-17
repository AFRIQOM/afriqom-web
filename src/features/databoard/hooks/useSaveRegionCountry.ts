import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'
import { RegionDataborad, RegionDataboradBody } from '../lib/types'

export function useSaveRegionCountry() {
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isPending, isSuccess, isError } = useMutator<
    RegionDataboradBody,
    any,
    RegionDataborad
  >({
    method: 'save',
    model: 'reregion_databoards',
    onSuccess: (response) => {
      notification.success({
        message: 'Region country saved successfully',
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
      saveRegionCountry: mutate
    }
  }
}
