"use client"

import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "../utils/className"

const containerVariants = cva("mx-auto w-full p-6", {
  variants: {
    size: {
      default: "max-w-screen-default",
      mobile: "max-w-screen-mobile",
      tablet: "max-w-screen-tablet",
      retina: "max-w-screen-retina",
      fhd: "max-w-screen-fhd",
      qhd: "max-w-screen-qhd",
      uhd: "max-w-screen-uhd",
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  className?: string
  size?: "mobile" | "tablet" | "retina" | "fhd" | "qhd" | "uhd" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size, ...props }, ref) => {
    const classes = cn(containerVariants({ size, className }))

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  },
)

Container.displayName = "Container"
