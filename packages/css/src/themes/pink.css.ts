import { blue, blueDark, pink, pinkDark, slate, slateDark } from '@radix-ui/colors'
import { assignVars, createGlobalTheme, globalStyle } from '@vanilla-extract/css'

import { convertRadixColor } from '~/utils/colors'
import { opDark, opLight } from '~/utils/op'
import { type Theme, vars } from '~/vars.css'

export const pinkThemeLight = {
  color: {
    neutral: convertRadixColor(slate),
    primary: convertRadixColor(pink),
    secondary: convertRadixColor(blue),
  },
  op: opLight,
} satisfies Theme

export const pinkThemeDark = {
  color: {
    neutral: convertRadixColor(slateDark),
    primary: convertRadixColor(pinkDark),
    secondary: convertRadixColor(blueDark),
  },
  op: opDark,
} satisfies Theme

globalStyle(':root, :host', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: assignVars(vars, pinkThemeDark),
    },
    '(prefers-color-scheme: light)': {
      vars: assignVars(vars, pinkThemeLight),
    },
  },
})

createGlobalTheme('[data-theme="dark"], .dark', vars, pinkThemeDark)

createGlobalTheme('[data-theme="light"] .light', vars, pinkThemeLight)
