// import { button } from '@momoi/css/styles/components/button'
// import { button } from '@momoi/css/dist/styles/components/button'
import '@momoi/css/reset.css'
import { button } from '@momoi/css/src/styles/components/button.css.ts'
import '@momoi/css/styles/components/button.css'
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
      className={button()}
      ref={ref}
      {...props}
    />
  })

Button.displayName = 'Button'

export default Button
