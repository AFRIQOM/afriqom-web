import { createSlice } from '@reduxjs/toolkit'
import { Role, User } from '@auth/lib/types'
import { getToken } from '@lib/cookies'
import { Organization } from '@features/organization/lib/types'

export type AuthState = {
  user?: User
  previewUser?: { email: string; fullName: string; message?: string }
  currentUserId?: string
  currentOrganisationId?: string
  currentOrganisation?: Organization
  isLoggedIn: boolean
  role?: Role
}

const initialState: AuthState = {
  user: undefined,
  isLoggedIn: Boolean(getToken())
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      return state
    },
    setCurrenUserId: (state, action) => {
      state.currentUserId = action.payload
      return state
    },
    setCurrenOrganisationId: (state, action) => {
      state.currentOrganisationId = action.payload
      return state
    },
    setCurrenOrganisation: (state, action) => {
      state.currentOrganisation = action.payload
      return state
    },
    setRole: (state, action) => {
      state.role = action.payload
      return state
    },
    setPreviewUser: (state, action) => {
      state.previewUser = action.payload
      return state
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
      return state
    },
    clearUser: (state) => {
      state.user = undefined
      state.isLoggedIn = false
    }
  }
})
