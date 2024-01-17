import { VariantProps, cva } from "class-variance-authority"
import React from "react"
import { ComposedForwardRefWithAsProps, ForwardedRefComponent, ReactTag } from "../utils/ref"

const container = cva("mx-auto w-full p-base", {
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
      max: "max-w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

type ContainerVariantProps = VariantProps<typeof container>

export interface ContainerProps extends ContainerVariantProps {}
interface Container extends ForwardedRefComponent {
  <Tag extends ReactTag>(props: ComposedForwardRefWithAsProps<Tag, ContainerProps>): React.ReactElement | null
}

function _generate<Tag extends ReactTag>(
  render: <Tag extends ReactTag>(
    props: ComposedForwardRefWithAsProps<Tag, ContainerProps>,
    ref: React.ForwardedRef<Tag>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<Tag, ComposedForwardRefWithAsProps<Tag, ContainerProps>>(render) as unknown as Container
}

export const Container = _generate(function ({ as = "div", children, className, size, ...props }, ref) {
  const Tag = as

  return (
    <Tag ref={ref} className={container({ size, className })} {...props}>
      {children}
    </Tag>
  )
})

Container.displayName = "Container"
