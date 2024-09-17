import { useAppDispatch, useAppSelector } from '@app/redux/selectors'
import { authSlice } from '@auth/lib/authSlice'
import { removeToken, setToken } from '@lib/cookies'
import { persistor } from '@app/redux/store'
import localforage from 'localforage'
import { LoginResponse, Role, User } from '@auth/lib/types'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@lib/appRoutes'
import { useEffect } from 'react'
import { Organization } from '@features/organization/lib/types'
import { logger } from '@lib/logger'
import { useGetUsers } from '@features/account/queries/useGetUsers'
import { useGetOrganizations } from '@features/organization/queries/useGetOrganizations'
import { useGetUserAssignedDatabaord } from '@features/databoard/queries/useGetUserAssignedDatabaord'
import { AppStatus } from '@lib/status'

export function useAuth() {
  const {
    previewUser,
    user,
    currentOrganisation,
    isLoggedIn,
    currentUserId,
    currentOrganisationId
  } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const setUser = (user?: User) => dispatch(authSlice.actions.setUser(user))
  const { data: assignedDataboard, isLoading: isLoadingAssignedDataboard } =
    useGetUserAssignedDatabaord({
      params: {
        user_id: currentUserId
      },
      enabled: Boolean(currentUserId) && isLoggedIn
    })
  const setPreviewUser = (user: {
    email: string
    fullName: string
    message?: string
  }) => dispatch(authSlice.actions.setPreviewUser(user))
  const setRole = (user: Role) => dispatch(authSlice.actions.setUser(user))
  const setCurrenUserId = (user: string) =>
    dispatch(authSlice.actions.setCurrenUserId(user))
  const setCurrenOrganisationId = (user: string) =>
    dispatch(authSlice.actions.setCurrenOrganisationId(user))
  const setCurrenOrganisation = (organization?: Organization) =>
    dispatch(authSlice.actions.setCurrenOrganisation(organization))
  const setIsLoggedIn = (isLoggedIn: boolean) =>
    dispatch(authSlice.actions.setIsLoggedIn(isLoggedIn))

  const isClientUser = user !== undefined && user.access_portal == 'client'

  const logout = async () => {
    await persistor.purge()
    await localforage.clear()
    removeToken()
    window.location.assign('/')
  }

  useEffect(() => {
    if (isLoggedIn && !currentUserId) {
      logout()
    }
  }, [])

  const onLoginSuccess = (data: LoginResponse) => {
    if (
      (data.currentOrganization &&
        data.currentOrganization.status == 'pending') ||
      data.user.status == 'pending'
    ) {
      setPreviewUser({
        email: data.user.email,
        fullName: data.user.full_name,
        message:
          data.user.status == 'pending'
            ? 'Your account is pending approval. contact your administrator for more information, or wait for approval'
            : ''
      })
      navigate(AppRoutes.welcome)
    } else {
      setToken(data.loginMetaData.token)
      setCurrenUserId(data.loginMetaData.info[0].id)
      setRole(data.loginMetaData.role)
      setCurrenOrganisation(data.currentOrganization)
      setUser(data.user)
      setIsLoggedIn(true)
      navigate(AppRoutes.dashboard)
    }
  }

  const { data, isLoading } = useGetUsers({
    params: { id: currentUserId },
    enabled: Boolean(currentUserId) && isLoggedIn
  })

  const {
    data: organizations,
    isLoading: loadingOrganization,
    refetch: refetchOrganization
  } = useGetOrganizations({
    params: { id: currentOrganisationId },
    enabled: Boolean(currentOrganisationId) && isLoggedIn && isClientUser
  })

  useEffect(() => {
    if (data && data[0]) {
      const user = data[0]
      setUser(user)
      if (user.access_portal == 'client')
        setCurrenOrganisationId(user.organisation_id)
    }
  }, [data, setCurrenOrganisationId, setUser])

  useEffect(() => {
    if (organizations && organizations[0] && user) {
      const organization = organizations[0]
      setCurrenOrganisation(organization)
    }
  }, [organizations])

  const mapAuthStatus = (status: AppStatus): AppStatus => {
    return isClientUser
      ? status == 'approval request'
        ? 'pending'
        : status
      : status
  }

  return {
    state: {
      isClientUser,
      user: { ...user } as User,
      currentOrganisation,
      currentOrganisationId,
      isLoggedIn,
      isLoadingUser: isLoading,
      previewUser,
      assignedDataboard
    },
    actions: {
      mapAuthStatus,
      setPreviewUser,
      refetchOrganization,
      isLoadingAssignedDataboard,
      setUser,
      setIsLoggedIn,
      logout,
      setCurrenOrganisation,
      setCurrenOrganisationId,
      onLoginSuccess
    }
  }
}
