"use client"

import React from "react"
import { cn } from "../utils/className"
import { forwardRefWithGeneric } from "../utils/ref"

export const Skeleton = forwardRefWithGeneric<"div", React.HTMLAttributes<HTMLDivElement>>(function (
  { as = "div", className, ...props },
  ref,
) {
  const _className = cn("bg-component animate-pulse rounded", className)

  const Component = as

  return <Component ref={ref} className={_className} {...props} />
})

Skeleton.displayName = "Skeleton"
