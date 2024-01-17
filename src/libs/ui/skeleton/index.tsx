import React from "react"
import { cn } from "../utils/className"
import { ComposedForwardRefWithAsProps, ForwardedRefComponent, ReactTag } from "../utils/ref"

interface Skeleton extends ForwardedRefComponent {
  <Tag extends ReactTag>(props: ComposedForwardRefWithAsProps<Tag, object>): React.ReactElement | null
}

function _generate<Tag extends ReactTag>(
  render: <Tag extends ReactTag>(
    props: ComposedForwardRefWithAsProps<Tag, object>,
    ref: React.ForwardedRef<Tag>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<Tag, ComposedForwardRefWithAsProps<Tag, object>>(render) as unknown as Skeleton
}

export const Skeleton = _generate(function ({ as = "div", className, ...props }, ref) {
  const _className = cn("bg-component animate-pulse rounded", className)

  const Tag = as

  return <Tag ref={ref} className={_className} {...props} />
})

Skeleton.displayName = "Skeleton"
