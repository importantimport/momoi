import type { GlobalProvider } from '@ladle/react'
import * as React from 'react'

import '@momoi/css/reset.css'
import '@momoi/css/themes/pink.css'

export const Provider: GlobalProvider = ({ children, globalState: { theme } }) => (
  <div className={theme.toLowerCase()}>
    {children}
  </div>
)
