import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export type ButtonProps
  = React.ButtonHTMLAttributes<HTMLButtonElement>
  & {
    asChild?: boolean
  }

export const Button
  = React.forwardRef<HTMLButtonElement, ButtonProps>(({ asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return <Comp
      ref={ref}
      {...props}
    />
  })

Button.displayName = 'Button'

export default Button
