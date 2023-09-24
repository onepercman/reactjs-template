"use client"

import { RadioGroup, RadioGroupProps } from "@headlessui/react"
import React from "react"
import { cn } from "../utils/className"

export interface SegmentedItem {
  label: React.ReactNode
  value: any
}

type BaseProps = RadioGroupProps<React.ElementType, any>

export interface SegmentedProps extends BaseProps {
  items?: SegmentedItem[]
}

export const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>(function (
  { items, className, ...props },
  ref,
) {
  const _className = cn("bg-default inline-flex h-10 cursor-pointer gap-1 rounded p-1", className)

  return (
    <RadioGroup as="div" ref={ref} className={_className} {...props}>
      {items?.map((item) => (
        <RadioGroup.Option
          key={item.value}
          value={item.value}
          className={({ checked }) =>
            cn(
              "inline-flex h-full flex-1 select-none items-center justify-center whitespace-nowrap rounded px-3 transition-colors",
              "hover:bg-primary/10",
              checked ? "btn-primary text-black" : "text-muted",
            )
          }
        >
          {item.label}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
})

Segmented.displayName = "Segmented"
