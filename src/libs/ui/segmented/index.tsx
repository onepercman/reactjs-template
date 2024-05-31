import { cn } from "@/libs/tailwind-variants"
import { RadioGroup, RadioGroupProps } from "@headlessui/react"
import React from "react"

export interface SegmentedItem {
  label: React.ReactNode
  value: any
  icon?: React.ReactNode
  activeClass?: string
}

type BaseProps = RadioGroupProps<React.ElementType, any>

export interface SegmentedProps extends BaseProps {
  items?: SegmentedItem[]
}

export const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>(
  function ({ items, className, ...props }, ref) {
    return (
      <RadioGroup
        as="div"
        ref={ref}
        className={cn(
          "bg-default inline-flex h-10 cursor-pointer gap-2 rounded",
          className,
        )}
        {...props}
      >
        {items?.map((item) => (
          <RadioGroup.Option
            key={item.value}
            value={item.value}
            className={({ checked }) =>
              cn(
                "btn size-md btn-normal flex-1 !font-semibold focus:ring-transparent",
                checked ? item.activeClass || "btn-primary" : "btn-static",
              )
            }
          >
            {item.icon}
            {item.label}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    )
  },
)

Segmented.displayName = "Segmented"
