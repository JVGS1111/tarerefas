import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'
import { SelectScrollUpButton } from './SelectScrollUpButton'
import { SelectScrollDownButton } from './SelectScrollDownButton'

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className="relative top-14  max-w-full overflow-hidden rounded-md bg-white shadow-sm"
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport className="w-full max-w-full pb-2 pl-1 pr-1 pt-2">
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

export { SelectContent }
