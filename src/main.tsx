import { Routes } from '@generouted/react-router/lazy'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@momoi/css/reset.css'
import '@momoi/css/themes/pink.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
