import { Routes } from '@generouted/react-router/lazy'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.body).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
