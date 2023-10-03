"use client"

import React from "react"
import { ContainerVariantProps, container } from "./variants"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, ContainerVariantProps {
  className?: string
  size?: "mobile" | "tablet" | "retina" | "fhd" | "qhd" | "uhd" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function (
  { children, className, size, ...props },
  ref,
) {
  return (
    <div ref={ref} className={container({ size, className })} {...props}>
      {children}
    </div>
  )
})

Container.displayName = "Container"
