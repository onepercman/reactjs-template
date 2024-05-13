import React from "react"
import { VariantProps, tv } from "tailwind-variants"

const checkbox = tv({
  base: "input-checkbox",
  variants: {
    size: {
      md: "h-6 w-6",
      sm: "h-6 w-6",
      lg: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

type CheckboxVariantProps = VariantProps<typeof checkbox>

type BaseCheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">

export interface CheckboxProps extends BaseCheckboxProps, CheckboxVariantProps {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function (
  { className, size, children, ...props },
  ref,
) {
  const _className = checkbox({ size, className })

  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input ref={ref} type="checkbox" className={_className} {...props} />
      {children}
    </label>
  )
})

Checkbox.displayName = "Checkbox"
