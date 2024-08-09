import React from "react"
import { LuBird } from "react-icons/lu"
import { cn } from "../utils"

export const Empty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function (
  { children, className, ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn("flex min-h-56", className)} {...props}>
      <div className="m-auto flex flex-col items-center gap-4 p-4">
        <LuBird />
        <div>{children ?? "Not found"}</div>
      </div>
    </div>
  )
})

Empty.displayName = "Empty"
