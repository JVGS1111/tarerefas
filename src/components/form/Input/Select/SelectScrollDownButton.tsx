import { CaretDown } from '@phosphor-icons/react'
import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className="flex items-center justify-center bg-white p-2 text-title"
    {...props}
  >
    <CaretDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

export { SelectScrollDownButton }
