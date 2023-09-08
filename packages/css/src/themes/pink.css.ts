import { blue, blueDark, pink, pinkDark, slate, slateDark } from '@radix-ui/colors'
import { assignVars, createGlobalTheme, globalStyle } from '@vanilla-extract/css'

import { convertRadixColor } from '~/utils/colors'
import { type Theme, vars } from '~/vars.css'

export const pinkThemeLight = {
  color: {
    neutral: convertRadixColor(slate),
    primary: convertRadixColor(pink),
    secondary: convertRadixColor(blue),
  },
} satisfies Theme

export const pinkThemeDark = {
  color: {
    neutral: convertRadixColor(slateDark),
    primary: convertRadixColor(pinkDark),
    secondary: convertRadixColor(blueDark),
  },
} satisfies Theme

globalStyle(':root', {
  '@media': {
    '(perfers-color-scheme: dark)': {
      vars: assignVars(vars, pinkThemeDark),
    },
    '(perfers-color-scheme: light)': {
      vars: assignVars(vars, pinkThemeLight),
    },
  },
})

createGlobalTheme('[data-theme="dark"]', vars, pinkThemeDark)

createGlobalTheme('[data-theme="light"]', vars, pinkThemeLight)
