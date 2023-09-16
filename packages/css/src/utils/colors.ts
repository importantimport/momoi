export const createThemeColorContrast = (name: string) =>
  Object.fromEntries(
    Array
      // [1, 2, ..., 12]
      .from({ length: 12 }, (_, i) => i + 1)
      // [[1, "momoi-color-name-1"], ...]
      .map(key => [key, `momoi-color-${name}-${key}`]),
  )

export const convertRadixColor = (color: Record<string, string>) =>
  Object.fromEntries(
    Object.values(color)
      .map((value, i) => [i + 1, value]),
  )
