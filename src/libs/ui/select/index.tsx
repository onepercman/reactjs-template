"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiCheck, HiChevronDown } from "react-icons/hi"
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
  function getValue(value?: any) {
    if (value?.length) {
      return (
        <div className="flex items-center gap-2">
          {value.map((v: any) => (
            <span key={v} className="btn size-xs btn-primary btn-normal">
              {options?.find((el) => el.value === v)?.label}
            </span>
          ))}
        </div>
      )
    }
    return options?.find((el) => el.value === value)?.label || <span />
  }

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
            {getValue(internalValue) || placeholder}
          </HeadlessUI.Listbox.Button>
          <HeadlessUI.Listbox.Options className="bg-component border-line flex flex-col overflow-hidden rounded border p-1 shadow">
            {options?.map((item) => (
              <HeadlessUI.Listbox.Option as={React.Fragment} key={item.value} value={item.value}>
                {({ selected }) => (
                  <div className="hover:bg-muted flex cursor-pointer items-center justify-between gap-6 rounded p-2 pr-8 transition-colors">
                    {item.label || item.value} {selected && <HiCheck />}
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
