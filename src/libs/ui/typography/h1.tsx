import { cn } from "@/libs/tailwind-variants"
import React, { HTMLAttributes } from "react"

export const H1 = React.forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(function ({ children, className, ...props }, ref) {
  return (
    <h1 ref={ref} className={cn("text-xl font-bold", className)} {...props}>
      {children}
    </h1>
  )
})

H1.displayName = "H1"
