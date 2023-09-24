"use client"

import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "../utils/className"

const checkboxVariants = cva(
  cn(
    "rounded bg-transparent text-primary",
    "focus:ring focus:ring-primary focus:outline-none",
    "focus:shadow focus:shadow-primary",
    "focus-within:ring focus-within:ring-primary",
    "focus-visible:ring focus-visible:ring-primary",
  ),
  {
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
  },
)

type CheckboxVariantProps = VariantProps<typeof checkboxVariants>

type BaseCheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">

export interface CheckboxProps extends BaseCheckboxProps, CheckboxVariantProps {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function (
  { className, size, children, ...props },
  ref,
) {
  const _className = checkboxVariants({ size, className })

  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input ref={ref} type="checkbox" className={_className} {...props} />
      {children}
    </label>
  )
})

Checkbox.displayName = "Checkbox"
