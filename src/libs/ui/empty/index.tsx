"use client"

import React from "react"
import { FaPoop } from "react-icons/fa6"
import { cn } from "../utils/className"

export const Empty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function (
  { children, className, ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn("flex w-full flex-col items-center justify-center gap-2 p-16", className)} {...props}>
      <FaPoop className="text-5xl" />
      <p className="text-center font-medium">{children || "No results found"}</p>
    </div>
  )
})

Empty.displayName = "Empty"
