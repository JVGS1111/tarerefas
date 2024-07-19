import React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const InputText = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        className="w-full rounded-md bg-input px-2.5 py-3 font-medium text-title shadow-sm outline-title placeholder:text-placeholder"
        type="text"
        ref={ref}
        {...props}
      />
    )
  },
)

InputText.displayName = 'InputText'

export { InputText }
