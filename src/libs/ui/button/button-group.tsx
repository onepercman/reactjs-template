import { cn } from "@/libs/className"
import React from "react"

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement>

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(function (
  { children, className, ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn("btn-group", className)} {...props}>
      {children}
    </div>
  )
})

ButtonGroup.displayName = "ButtonGroup"
