import React from "react"
import { cn } from "../utils/className"
import { forwardRefWithAs } from "../utils/ref"

export const Skeleton = forwardRefWithAs<"div", React.HTMLAttributes<HTMLDivElement>>(function (
  { as = "div", className, ...props },
  ref,
) {
  const _className = cn("bg-component animate-pulse rounded", className)

  const Tag = as

  return <Tag ref={ref} className={_className} {...props} />
})

Skeleton.displayName = "Skeleton"
