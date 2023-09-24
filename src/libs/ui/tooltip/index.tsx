"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import React from "react"
import { cn } from "../utils/className"

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | string
  message?: React.ReactNode
  float?: Omit<FloatProps, "children">
}

export const Tooltip: React.FC<TooltipProps> = React.forwardRef<HTMLDivElement, TooltipProps>(function (
  { children, message, className, float, ...props },
  ref,
) {
  const [show, setShow] = React.useState<boolean>(false)

  const triggerProps: React.HTMLAttributes<HTMLDivElement> = {
    onMouseEnter: () => setShow(true),
    onFocus: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onBlur: () => setShow(false),
    onClickCapture: () => setShow((prev) => !prev),
  }

  const Trigger =
    typeof children === "string" ? (
      <span {...triggerProps}>{children}</span>
    ) : children ? (
      React.cloneElement(children, {
        ...triggerProps,
      })
    ) : (
      <span></span>
    )

  return (
    <Float
      enter="ease-expo-out duration-100"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-expo-in duration-100"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      show={show && !!message}
      portal={true}
      shift={10}
      arrow={0}
      flip={10}
      offset={8}
      {...float}
    >
      {Trigger}
      <div className="border-muted rounded border" {...triggerProps}>
        {/* <Float.Arrow className="bg-component border-muted absolute h-3 w-3 rotate-45 border" /> */}
        <div ref={ref} className={cn("bg-component relative rounded px-4 py-2 shadow", className)} {...props}>
          {message}
        </div>
      </div>
    </Float>
  )
})

Tooltip.displayName = "Tooltip"
