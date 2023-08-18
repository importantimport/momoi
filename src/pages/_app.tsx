import { Outlet } from 'react-router-dom'

import { Header } from '../components/header'

import './app.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
