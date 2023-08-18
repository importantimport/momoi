import { style } from '@vanilla-extract/css'

export const header = style({
  alignItems: 'center',
  backgroundColor: 'pink',
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
})

export const headerTitle = style({
  filter: 'url(#white)',
  fontSize: '1.5rem',
  fontVariant: 'text',
  fontVariantEmoji: 'text',
})

export const headerButton = style({
  backgroundColor: 'white',
  color: 'pink',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
})
