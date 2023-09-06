import { blue, blueDark, pink, pinkDark, slate, slateDark } from '@radix-ui/colors'
import { assignVars, createGlobalTheme, globalStyle } from '@vanilla-extract/css'

import { type Theme, vars } from '../contract.css'
import { convertRadixColor } from '../utils/colors'

export const themePink = {
  colors: {
    neutral: convertRadixColor(slate),
    primary: convertRadixColor(pink),
    secondary: convertRadixColor(blue),
  },
} satisfies Theme

export const themePinkDark = {
  colors: {
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
