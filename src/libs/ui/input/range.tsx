import { cn } from "@/libs/tailwind-variants"
import React from "react"

type BaseRangeProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">

export interface RangeProps extends BaseRangeProps {}

export const Range = React.forwardRef<HTMLInputElement, RangeProps>(function (
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type="range"
      className={cn("input-range", className)}
      {...props}
    />
  )
})

Range.displayName = "Range"
