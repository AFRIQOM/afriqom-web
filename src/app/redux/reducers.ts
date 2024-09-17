import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from '@auth/lib/authSlice'
import { persistReducer } from 'redux-persist'
import localForage from 'localforage'

const authPersistConfig = {
  key: 'auth',
  storage: localForage,
  whitelist: ['user', 'currentUserId']
}

const rootReducer = combineReducers({
  [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer)
})

export type RootState = ReturnType<typeof rootReducer>

const modifiedRootReducer = (state: any, action: any) =>
  rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action)

export default modifiedRootReducer
