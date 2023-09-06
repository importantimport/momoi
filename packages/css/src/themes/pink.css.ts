import { blue, blueDark, pink, pinkDark, slate, slateDark } from '@radix-ui/colors'
import { assignVars, createGlobalTheme, globalStyle } from '@vanilla-extract/css'

import { convertRadixColor } from '../utils/colors'
import { type Theme, vars } from '../vars.css'

export const themePink = {
  color: {
    neutral: convertRadixColor(slate),
    primary: convertRadixColor(pink),
    secondary: convertRadixColor(blue),
  },
} satisfies Theme

export const themePinkDark = {
  color: {
    neutral: convertRadixColor(slateDark),
    primary: convertRadixColor(pinkDark),
    secondary: convertRadixColor(blueDark),
  },
} satisfies Theme

globalStyle(':root', {
  '@media': {
    '(perfers-color-scheme: dark)': {
      vars: assignVars(vars, themePinkDark),
    },
    '(perfers-color-scheme: light)': {
      vars: assignVars(vars, themePink),
    },
  },
})

createGlobalTheme('[data-theme="dark"]', vars, themePinkDark)

createGlobalTheme('[data-theme="light"]', vars, themePink)
