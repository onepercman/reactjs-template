import React from "react"
import { VariantProps, tv } from "tailwind-variants"

const container = tv({
  base: "mx-auto w-full",
  variants: {
    padding: {
      true: "p-4",
    },
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
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
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
  <Tag extends ReactTag>(
    props: ForwardRefWithAsProps<Tag, ContainerProps>,
  ): React.ReactElement | null
}

function _generate<Tag extends ReactTag>(
  render: <Tag extends ReactTag>(
    props: ForwardRefWithAsProps<Tag, ContainerProps>,
    ref: React.ForwardedRef<Tag>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<Tag, ForwardRefWithAsProps<Tag, ContainerProps>>(
    render,
  ) as unknown as Container
}

export const Container = _generate(function (
  { as = "div", children, className, size, padding, ...props },
  ref,
) {
  const Tag = as

  return (
    <Tag
      ref={ref}
      className={container({ size, className, padding })}
      {...props}
    >
      {children}
    </Tag>
  )
})

Container.displayName = "Container"
