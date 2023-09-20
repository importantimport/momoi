import { type ButtonVariants, button } from '@momoi/css/components/button'
import '@momoi/css/components/button.css'
import { Slot } from '@radix-ui/react-slot'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

export type ButtonProps
  = ButtonHTMLAttributes<HTMLButtonElement>
  & {
    asChild?: boolean
    variant?: ButtonVariants
  }

export const Button
  = forwardRef<HTMLButtonElement, ButtonProps>(({ asChild, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return <Comp
      className={button(variant)}
      ref={ref}
      {...props}
    />
  })

Button.displayName = 'Button'

export default Button
