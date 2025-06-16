"use client"

import { cn, forwardRef } from "react-tvcx"
import { Spinner } from "./spinner"

export const Loader = forwardRef(function (
  { as: Component = "div", children, className, ...props },
  ref,
) {
  return (
    <Component ref={ref} className={cn("flex min-h-56", className)} {...props}>
      <div className="m-auto flex flex-col items-center gap-4 p-4">
        <Spinner />
      </div>
    </Component>
  )
})

Loader.displayName = "Loader"

export default Loader
