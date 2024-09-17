import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'
import { Organization } from '@features/organization/lib/types'

export function useUpdateLogo() {
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isPending, isSuccess, isError } = useMutator<
    { file: File },
    any,
    { url: string }
  >({
    method: 'save',
    model: 'blobs',
    useFormData: true,
    onSuccess: (response) => {
      notification.success({
        message: 'Image uploaded successfully',
        placement: 'topRight'
      })
    },
    onError: (error) => {
      setErrorMessage('Error uploading image')
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
    state: { isUploading: isPending, errorMessage, isSuccess, isError },
    actions: {
      setErrorMessage,
      updateLogo: mutate
    }
  }
}
