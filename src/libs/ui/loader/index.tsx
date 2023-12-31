import React from "react"
import { Spinner } from "../spinner"
import { cn } from "../utils/className"

export const Loader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function (
  { className, ...props },
  ref,
) {
  const _className = cn("flex w-full items-center justify-center p-32", className)
  return (
    <div ref={ref} className={_className} {...props}>
      <Spinner className="text-primary text-6xl" />
    </div>
  )
})

Loader.displayName = "Loader"
