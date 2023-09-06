import { type createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'

const createThemeColors = (name: string) =>
  Object.fromEntries(
    Array
      // [1, 2, ..., 12]
      .from({ length: 12 }, (_, i) => i + 1)
      // [[1, "momoi-color-name-1"], ...]
      .map(key => [key, `momoi-color-${name}-${key}`]),
  )

export const vars = createGlobalThemeContract({
  colors: {
    neutral: createThemeColors('neutral'),
    primary: createThemeColors('primary'),
    secondary: createThemeColors('secondary'),
  },
})

export type Theme = Parameters<typeof createGlobalTheme<typeof vars>>[2]
