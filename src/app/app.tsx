import React from 'react'
import ThemeProvider from './components/ThemeProvider/ThemeProvider'
import { useAuth } from '@auth/hooks/useAuth'
import { ScrollToTop } from '@components/core/ScrollTop'
import AppNavigation from '../routes/AppNavigation'
import AppIntl from '@app/components/AppIntl'

export function App() {
  const {
    state: { isLoggedIn }
  } = useAuth()

  return (
    <AppIntl>
      <ScrollToTop />
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </AppIntl>
  )
}
