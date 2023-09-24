"use client"

import React from "react"
import { cn } from "../utils/className"

export const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("bg-component animate-pulse rounded", className)} {...props} />
  },
)

Skeleton.displayName = "Skeleton"
