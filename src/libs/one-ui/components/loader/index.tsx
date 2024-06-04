import { Spinner } from "@/libs/one-ui/components"
import { cn } from "@/libs/one-ui/utils"
import React from "react"

interface Loader extends ForwardedRefComponent {
  <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, object>,
  ): React.ReactElement | null
}

function _constructor<As extends ReactTag>(
  render: <As extends ReactTag>(
    props: PropsWithAsAttributes<object, As>,
    ref: React.ForwardedRef<As>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<As, PropsWithAsAttributes<object, As>>(
    render,
  ) as unknown as Loader
}

export const Loader = _constructor(function (
  { as = "div", className, ...props },
  ref,
) {
  const Tag = as

  const _className = cn(
    "flex w-full items-center justify-center p-4 text-xl min-h-56",
    className,
  )

  return (
    <Tag ref={ref} className={_className} {...props}>
      <Spinner className="text-primary" />
    </Tag>
  )
})

Loader.displayName = "Loader"
