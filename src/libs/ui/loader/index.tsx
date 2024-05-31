import { cn } from "@/libs/tailwind-variants"
import React from "react"
import { Spinner } from "../spinner"

interface Loader extends ForwardedRefComponent {
  <Tag extends ReactTag>(
    props: ForwardRefWithAsProps<Tag, object>,
  ): React.ReactElement | null
}

function _generate<Tag extends ReactTag>(
  render: <Tag extends ReactTag>(
    props: PropsWithAsAttributes<object, Tag>,
    ref: React.ForwardedRef<Tag>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<Tag, PropsWithAsAttributes<object, Tag>>(
    render,
  ) as unknown as Loader
}

export const Loader = _generate(function ({ as, className, ...props }, ref) {
  const Tag = as || ("div" as ReactTag)

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
