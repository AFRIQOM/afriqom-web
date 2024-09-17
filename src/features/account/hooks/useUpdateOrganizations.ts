import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'
import {
  Organization,
  OrganizationBody
} from '@features/organization/lib/types'

export function useUpdateOrganization() {
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isPending, isSuccess, isError } = useMutator<
    OrganizationBody,
    any,
    Organization
  >({
    method: 'save',
    model: 'organisations',
    onSuccess: (response) => {
      notification.success({
        message: 'Organization saved successfully',
        placement: 'topRight'
      })
    },
    onError: (error) => {
      setErrorMessage('Error creating organization')
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
      updateOrganization: mutate
    }
  }
}
