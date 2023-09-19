import type { Story } from '@ladle/react'

import { Button as MButton } from '~/components/button'

export const Button: Story<{
  disabled: boolean
  size: 'medium' | 'small'
  transform: 'none' | 'skew'
// eslint-disable-next-line react/prop-types
}> = ({ disabled, size, transform }) => (
  <MButton disabled={disabled} variant={{ size, transform }}>Button</MButton>
)

Button.args = {
  disabled: false,
  size: 'small',
  transform: 'none',
}

Button.argTypes = {
  size: {
    control: { type: 'select' },
    options: ['small', 'medium'],
  },
  transform: {
    control: { type: 'select' },
    options: ['none', 'skew'],
  },
}
