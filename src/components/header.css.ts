import { style } from '@vanilla-extract/css'

export const header = style({
  backgroundColor: 'pink',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const headerTitle = style({
  filter: 'url(#white)',
  fontVariant: 'text',
  fontVariantEmoji: 'text',
  fontSize: '1.5rem',
})

export const headerButton = style({
  backgroundColor: 'white',
  color: 'pink',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
})
