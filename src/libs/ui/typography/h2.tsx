import { cn } from "@/libs/className"
import React, { HTMLAttributes } from "react"

export const H2 = React.forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(function (
  { children, className, ...props },
  ref,
) {
  return (
    <h2 ref={ref} className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </h2>
  )
})

H2.displayName = "H2"
