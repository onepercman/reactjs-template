import React from "react"
import { cn } from "../utils/className"

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement>

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("btn-group", className)} {...props}>
        {children}
      </div>
    )
  },
)

ButtonGroup.displayName = "ButtonGroup"
