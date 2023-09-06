import { style } from '@vanilla-extract/css'

export const button = style({
  ':focus': {
    boxShadow: '0 0 0 2px black',
  },
  ':hover': {
    backgroundColor: 'gray',
  },
  'alignItems': 'center',
  'backgroundColor': 'white',
  'borderRadius': '4px',
  'color': 'black',
  'display': 'inline-flex',
  'fontWeight': 500,
  'height': 36,
  'justifyContent': 'center',
  'lineHeight': 1,
  'padding': '0 15px',
})