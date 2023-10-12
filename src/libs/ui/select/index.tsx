"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiChevronDown } from "react-icons/hi"
import { Button } from "../button"
import { cn } from "../utils/className"

interface SelectOption {
  label?: React.ReactNode
  value?: any
}

type BaseProps = HeadlessUI.ListboxProps<Button, any, any>

export interface SelectProps extends BaseProps {
  options?: Array<SelectOption>
  float?: Omit<FloatProps, "as" | "children" | "className">
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(function (
  { float, options, placeholder, size, variant, className, ...props },
  ref,
) {
  return (
    <HeadlessUI.Listbox ref={ref} as="div" {...props}>
      {({ value: internalValue }) => (
        <Float
          portal={true}
          flip={10}
          shift={10}
          adaptiveWidth={true}
          offset={4}
          enter="ease-out duration-100"
          enterFrom="opacity-0 -translate-y-3"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-3"
          {...float}
        >
          <HeadlessUI.Listbox.Button
            as={Button}
            className={cn("relative justify-between", className)}
            rightIcon={<HiChevronDown />}
            size={size}
            variant={variant}
          >
            {options?.find((item) => item.value === internalValue)?.label || internalValue || (
              <span className="text-muted">{placeholder}</span>
            )}
          </HeadlessUI.Listbox.Button>
          <HeadlessUI.Listbox.Options className="bg-component border-line flex flex-col overflow-hidden rounded border p-1 shadow">
            {options?.map((item) => (
              <HeadlessUI.Listbox.Option as={React.Fragment} key={item.value} value={item.value}>
                {({ selected }) => (
                  <div
                    className={cn(
                      "hover:bg-muted cursor-pointer rounded p-2 pr-8 transition-colors",
                      selected && "bg-primary/20",
                    )}
                  >
                    {item.label || item.value}
                  </div>
                )}
              </HeadlessUI.Listbox.Option>
            ))}
          </HeadlessUI.Listbox.Options>
        </Float>
      )}
    </HeadlessUI.Listbox>
  )
})

Select.displayName = "Select"
