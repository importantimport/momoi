import { Outlet } from 'react-router-dom'
import { createHead } from 'unhead'

import { Header } from '~/components/header'

import './app.css'

createHead()

const App = () => (
  <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
)

App.displayName = 'Momoi App'

export default App
