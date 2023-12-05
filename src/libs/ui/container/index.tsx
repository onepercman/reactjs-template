"use client"

import { VariantProps, cva } from "class-variance-authority"
import { forwardRefWithAs } from "../utils/ref"

const container = cva("mx-auto w-full p-6", {
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

type ContainerVariantProps = VariantProps<typeof container>

export interface ContainerProps extends ContainerVariantProps {}

export const Container = forwardRefWithAs<"div", ContainerProps>(function (
  { as = "div", children, className, size, ...props },
  ref,
) {
  const Component = as

  return (
    <Component ref={ref} className={container({ size, className })} {...props}>
      {children}
    </Component>
  )
})

Container.displayName = "Container"
