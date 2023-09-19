import '@vanilla-extract/css'
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { vars } from '~/vars.css'

export const button = recipe({
  base: {
    backgroundColor: vars.color.neutral[1], // black
    borderRadius: 4,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    color: `color-mix(in srgb, ${vars.color.neutral[11]} 50%, ${vars.color.neutral[12]})`, // white
  },
  defaultVariants: { size: 'small', transform: 'none' },
  variants: {
    size: {
      medium: {
        padding: 12,
      },
      small: {
        padding: 8,
      },
    },
    transform: {
      none: {},
      skew: {
        transform: 'skew(-15deg)',
      },
    },
  },
})

export type ButtonVariants = RecipeVariants<typeof button>

// export const button = style({
//   // ':focus': {
//   //   boxShadow: '0 0 0 2px black',
//   // },
//   ':hover': {
//     backgroundColor: 'gray',
//   },
//   'alignItems': 'center',
//   'backgroundColor': 'white',
//   'borderRadius': '4px',
//   'color': 'black',
//   'display': 'inline-flex',
//   'fontWeight': 500,
//   'height': 36,
//   'justifyContent': 'center',
//   'lineHeight': 1,
//   'padding': '0 15px',
// })
