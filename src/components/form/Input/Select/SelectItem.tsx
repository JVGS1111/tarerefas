import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className=" p-2 font-medium text-title data-[highlighted]:rounded-md data-[highlighted]:bg-input data-[highlighted]:outline-none"
    {...props}
  >
    <SelectPrimitive.ItemText>
      <div className="flex items-center gap-1.5 text-title">{children}</div>
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName
export { SelectItem }
