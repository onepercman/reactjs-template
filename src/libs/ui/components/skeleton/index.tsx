import { cn } from "@/libs/ui/utils"
import React from "react"

interface Skeleton extends ForwardedRefComponent {
  <Tag extends ReactTag>(
    props: ForwardRefWithAsProps<Tag, object>,
  ): React.ReactElement | null
}

function _constructor<Tag extends ReactTag>(
  render: <Tag extends ReactTag>(
    props: ForwardRefWithAsProps<Tag, object>,
    ref: React.ForwardedRef<Tag>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<Tag, ForwardRefWithAsProps<Tag, object>>(
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
