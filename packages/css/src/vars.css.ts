import { type createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'

import { createThemeColorContrast } from '~/utils/colors'

export const vars = createGlobalThemeContract({
  color: {
    neutral: createThemeColorContrast('neutral'),
    primary: createThemeColorContrast('primary'),
    secondary: createThemeColorContrast('secondary'),
  },
})

export type Theme = Parameters<typeof createGlobalTheme<typeof vars>>[2]
