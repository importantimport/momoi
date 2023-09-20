import type { GlobalProvider } from '@ladle/react'

import '@momoi/css/reset.css'
import '@momoi/css/themes/pink.css'
import React from 'react'

// eslint-disable-next-line react/prop-types
export const Provider: GlobalProvider = ({ children, globalState: { theme } }) => (
  // eslint-disable-next-line react/prop-types
  <div className={theme.toLowerCase()}>
    {children}
  </div>
)
