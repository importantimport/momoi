import '@vanilla-extract/css'
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { vars } from '~/vars.css'

export const button = recipe({
  base: {
    color: `color-mix(in srgb, ${vars.color.neutral[11]} 50%, ${vars.color.neutral[12]})`, // white
    backgroundColor: vars.color.neutral[1], // black
    borderRadius: 4,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // shadow-md
    ':hover': {
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // shadow-lg
    },
  },
  defaultVariants: { transform: 'none', size: 'small' },
  variants: {
    transform: {
      none: {},
      skew: {
        transform: 'skew(-15deg)',
      },
    },
    size: {
      medium: {
        padding: 12,
      },
      small: {
        padding: 8,
      },
    },
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
