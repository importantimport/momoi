import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  height: '2rem',
  padding: '1rem',
  backgroundColor: 'pink',
})

export const headerTitle = style({
  fontSize: '1.5rem',
  fontVariant: 'text',
  filter: 'url(#white)',
  fontVariantEmoji: 'text',
})
