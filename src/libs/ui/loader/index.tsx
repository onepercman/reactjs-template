"use client"

import React from "react"
import { Loading } from "../loading"
import { cn } from "../utils/className"

export const Loader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex w-full items-center justify-center p-32", className)} {...props}>
        <Loading className="text-primary text-6xl" />
      </div>
    )
  },
)

Loader.displayName = "Loader"
