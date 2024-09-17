import { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useMutator } from '@hooks/useApi'
import { User, UserBody } from '@auth/lib/types'

export function useSaveUser() {
  const [errorMessage, setErrorMessage] = useState('')
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const { mutate, isPending, isSuccess, isError } = useMutator<
    UserBody,
    any,
    User
  >({
    method: 'update',
    model: 'Users',
    onSuccess: (response) => {
      notification.success({
        message: 'User saved successfully',
        placement: 'topRight'
      })
    },
    onError: (error) => {
      setErrorMessage(
        'Error creating user. Email and phone number must be unique'
      )
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
      newPassword,
      newUsername,
      openSuccessModal,
      isLoading: isPending,
      errorMessage,
      isSuccess,
      isError
    },
    actions: {
      setNewPassword,
      setNewUsername,
      setOpenSuccessModal,
      setErrorMessage,
      saveUser: mutate
    }
  }
}
