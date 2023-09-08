import { ComposeContextProvider } from 'foxact/compose-context-provider'
import { Outlet } from 'react-router-dom'
import { createHead } from 'unhead'

import { Header } from '~/components/header'
import { MatrixClientProvider, ReactRouterConcurrentNavigationProvider } from '~/context'

import './app.css'

createHead()

/* eslint-disable react/jsx-key */
const contexts = [
  <MatrixClientProvider />,
  <ReactRouterConcurrentNavigationProvider />,
]
/* eslint-enable react/jsx-key */

const App = () => (
  <ComposeContextProvider contexts={contexts}>
    <Header />
    <main>
      <Outlet />
    </main>
  </ComposeContextProvider>
)

App.displayName = 'Momoi App'

export default App
