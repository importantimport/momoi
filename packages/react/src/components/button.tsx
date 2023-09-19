import '@momoi/css/reset.css'
import { type ButtonVariants, button } from '@momoi/css/components/button'
import '@momoi/css/components/button.css'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export type ButtonProps
  = React.ButtonHTMLAttributes<HTMLButtonElement>
  & {
    asChild?: boolean
    variant?: ButtonVariants
  }

export const Button
  = React.forwardRef<HTMLButtonElement, ButtonProps>(({ asChild, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return <Comp
      className={button(variant)}
      ref={ref}
      {...props}
    />
  })

Button.displayName = 'Button'

export default Button
