import { CaretDown } from '@phosphor-icons/react'
import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className="inline-flex w-full items-center justify-between rounded-md bg-input px-2.5 py-3 font-medium text-title shadow-sm outline-title  data-[placeholder]:text-placeholder "
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <CaretDown weight="bold" size={24} className="text-title" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

export { SelectTrigger }
