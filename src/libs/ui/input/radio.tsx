"use client"

import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "../utils/className"

const radioVariants = cva(
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

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof radioVariants> {}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({ className, size, children, ...props }, ref) => {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input ref={ref} type="radio" className={radioVariants({ size, className })} {...props} />
      {children}
    </label>
  )
})

Radio.displayName = "Radio"
