import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Routes } from '@generouted/react-router/lazy'

createRoot(document.body).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
