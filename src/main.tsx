import { Routes } from '@generouted/react-router/lazy'
import '@momoi/css/reset.css'
import '@momoi/css/themes/pink.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
