import { cn } from "@/libs/one-ui/utils"
import React from "react"

interface Skeleton extends ForwardedRefComponent {
  <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, object>,
  ): React.ReactElement | null
}

function _constructor<As extends ReactTag>(
  render: <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, object>,
    ref: React.ForwardedRef<As>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<As, ForwardRefWithAsProps<As, object>>(
    render,
  ) as unknown as Skeleton
}

export const Skeleton = _constructor(function (
  { as = "div", className, ...props },
  ref,
) {
  const _className = cn("bg-default animate-pulse rounded", className)

  const Tag = as

  return <Tag ref={ref} className={_className} {...props} />
})

Skeleton.displayName = "Skeleton"
