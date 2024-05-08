import { Switch as InternalSwitch, SwitchProps } from "@headlessui/react"
import React from "react"
import { cn } from "../utils/className"

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps<React.ElementType>>(function (
  { className, ...props },
  ref,
) {
  return (
    <InternalSwitch
      ref={ref}
      className={({ checked }: { checked: boolean }) =>
        cn(
          "bg-component border-line ring-line relative h-5 w-10 overflow-hidden rounded-full p-1 ring",
          checked && "ring-primary",
          className,
        )
      }
      {...props}
    >
      {({ checked }) => (
        <div
          className={cn(
            "absolute inset-0.5 inline-flex justify-end rounded-full bg-transparent transition-all ease-in-out",
            checked ? "translate-x-0" : "-translate-x-5",
          )}
        >
          <span className="bg-primary absolute h-4 w-4 rounded-full" />
        </div>
      )}
    </InternalSwitch>
  )
})

Switch.displayName = "Switch"
