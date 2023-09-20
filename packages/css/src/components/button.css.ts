import '@vanilla-extract/css'
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'
import OP from 'open-props'

import { vars } from '~/vars.css'

export const button = recipe({
  base: {
    color: `color-mix(in srgb, ${vars.color.neutral[11]} 50%, ${vars.color.neutral[12]})`, // white
    backgroundColor: vars.color.neutral[1], // black
    borderRadius: 4,
    boxShadow: OP.shadow2,
    ':hover': {
      boxShadow: OP.shadow3,
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
      // height: 40px
      medium: {
        padding: 12,
      },
      // height: 32px
      small: {
        minWidth: 32,
        height: 32,
        padding: 4,
      },
    },
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
