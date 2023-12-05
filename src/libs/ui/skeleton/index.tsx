"use client"

import React from "react"
import { cn } from "../utils/className"
import { forwardRefWithAs } from "../utils/ref"

export const Skeleton = forwardRefWithAs<React.HTMLAttributes<HTMLDivElement>, "div">(function (
  { as = "div", className, ...props },
  ref,
) {
  const _className = cn("bg-component animate-pulse rounded", className)

  const Component = as

  return <Component ref={ref} className={_className} {...props} />
})
