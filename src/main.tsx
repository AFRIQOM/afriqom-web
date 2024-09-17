import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import { App } from '@app/app'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from '@app/redux/store'
import ClientProvider from '@lib/api/ClientProvider'
import { PersistGate } from 'redux-persist/integration/react'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ClientProvider>
            <App />
          </ClientProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
