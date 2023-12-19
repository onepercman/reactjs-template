import { Transition, TransitionClasses } from "@headlessui/react"
import React from "react"
import { forwardRefWithAs } from "../utils/ref"

interface TransformProps {
  variant?: TransitionClasses
  show?: boolean
  appear?: boolean
}

export const Transform = forwardRefWithAs<"div", TransformProps>(function (
  { as = "div", variant, children, ...props },
  ref,
) {
  return (
    <Transition {...props} as={React.Fragment} unmount appear>
      <Transition.Child ref={ref as React.ForwardedRef<HTMLElement>} as={as as React.ElementType} {...variant}>
        {children}
      </Transition.Child>
    </Transition>
  )
})
