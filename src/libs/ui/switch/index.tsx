"use client"

import { Switch as InternalSwitch, SwitchProps } from "@headlessui/react"
import React from "react"
import { cn } from "../utils/className"

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps<React.ElementType>>(
  ({ className, ...props }, ref) => {
    return (
      <InternalSwitch
        ref={ref}
        className={cn("relative h-6 w-12 overflow-hidden rounded-full bg-slate-700", className)}
        {...props}
      >
        {({ checked }) => (
          <div
            className={cn(
              "bg-primary absolute inset-0 inline-flex justify-end rounded-full transition-all ease-in-out",
              checked ? "translate-x-0" : "-translate-x-6",
            )}
          >
            <span className="absolute h-6 w-6 rounded-full bg-white" />
          </div>
        )}
      </InternalSwitch>
    )
  },
)

Switch.displayName = "Switch"
