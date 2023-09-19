import { type createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'

import { createThemeColorContrast } from '~/utils/colors'

import { op } from './utils/op'

export const vars = createGlobalThemeContract({
  // Radix Colors
  color: {
    neutral: createThemeColorContrast('neutral'),
    primary: createThemeColorContrast('primary'),
    secondary: createThemeColorContrast('secondary'),
  },
  // Open Props
  op,
})

export type Theme = Parameters<typeof createGlobalTheme<typeof vars>>[2]
