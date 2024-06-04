import { ContainerVariantProps, container } from "@/libs/one-ui/theme"
import React from "react"

export interface ContainerProps extends ContainerVariantProps {}
interface Container extends ForwardedRefComponent {
  <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, ContainerProps>,
  ): React.ReactElement | null
}

function _constructor<As extends ReactTag>(
  render: <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, ContainerProps>,
    ref: React.ForwardedRef<As>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<As, ForwardRefWithAsProps<As, ContainerProps>>(
    render,
  ) as unknown as Container
}

export const Container = _constructor(function (
  { as = "div", children, className, size, ...props },
  ref,
) {
  const Tag = as

  return (
    <Tag ref={ref} className={container({ size, className })} {...props}>
      {children}
    </Tag>
  )
})

Container.displayName = "Container"
