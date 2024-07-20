import { CaretUp } from '@phosphor-icons/react'
import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={'flex items-center justify-center bg-white p-2 text-title '}
    {...props}
  >
    <CaretUp />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

export { SelectScrollUpButton }
