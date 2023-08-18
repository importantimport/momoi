import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Routes } from '@generouted/react-router/lazy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />,
  </StrictMode>,
)
