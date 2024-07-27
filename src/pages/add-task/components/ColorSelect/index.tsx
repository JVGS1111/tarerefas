import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'

const ColorRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroup.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroup.Root>
>(({ children, ...props }, ref) => (
  <RadioGroup.Root
    className="flex flex-row flex-wrap gap-3 "
    defaultValue="default"
    aria-label="View density"
    ref={ref}
    {...props}
  >
    {children}
  </RadioGroup.Root>
))

ColorRadioGroup.displayName = 'ColorRadioGroup'

const ColorRadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroup.Item>
>(({ children, ...props }, ref) => (
  <RadioGroup.Item
    className={`
      h-11 
      w-11
      rounded-full
      border-2 border-white bg-white shadow-sm`}
    {...props}
    ref={ref}
  >
    <RadioGroup.Indicator
      className="
      absolute
      h-11  
      w-11 translate-x-[-50%]
      translate-y-[-50%] 
      rounded-full
      border-2
      border-solid
      border-green-400
      bg-white
  "
    />
    {children}
  </RadioGroup.Item>
))

ColorRadioItem.displayName = 'ColorRadioItem'

export { ColorRadioGroup, ColorRadioItem }
