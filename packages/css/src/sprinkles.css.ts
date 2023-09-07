import {
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles'

// import { vars } from './vars.css'

// /** {@link https://tailwindcss.com/docs/padding} */
// const space = {
//   large: '16px',
//   medium: '8px',
//   none: 0,
//   small: '4px',
//   // etc.
// }

const responsiveProperties = defineProperties({
  /** {@link https://tailwindcss.com/docs/responsive-design} */
  conditions: {
    /* eslint-disable perfectionist/sort-objects */
    'xs': {},
    'sm': { '@media': '(min-width: 640px)' },
    'md': { '@media': '(min-width: 768px)' },
    'lg': { '@media': '(min-width: 1024px)' },
    'xl': { '@media': '(min-width: 1280px)' },
    '2xl': { '@media': '(min-width: 1536px)' },
    /* eslint-enable perfectionist/sort-objects */
  },
  defaultCondition: 'xs',
  properties: {
    alignItems: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
    ],
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    // paddingTop: space,
    // paddingBottom: space,
    // paddingLeft: space,
    // paddingRight: space,
  },
  responsiveArray: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  shorthands: {
    // padding: [
    //   'paddingTop',
    //   'paddingBottom',
    //   'paddingLeft',
    //   'paddingRight',
    // ],
    // paddingX: ['paddingLeft', 'paddingRight'],
    // paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

/** {@link https://tailwindcss.com/docs/box-shadow} */
const boxShadowProperties = defineProperties({
  properties: {
    boxShadow: {
      /* eslint-disable perfectionist/sort-objects */
      'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      'default': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      'none': '0 0 #0000',
      /* eslint-enable perfectionist/sort-objects */
    },
  },
})

export const sprinkles = createSprinkles(
  responsiveProperties,
  boxShadowProperties,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
