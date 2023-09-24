"use client"

import React from "react"
import { cn } from "../utils/className"

export const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function (
  { className, ...props },
  ref,
) {
  const _className = cn("bg-component animate-pulse rounded", className)

  return <div ref={ref} className={_className} {...props} />
})

Skeleton.displayName = "Skeleton"
