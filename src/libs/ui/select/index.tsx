"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiCheck, HiChevronDown } from "react-icons/hi"
import { Button } from "../button"
import { cn } from "../utils/className"

export interface SelectOption<T = any> extends HeadlessUI.ListboxOptionProps<Button, T> {
  children?: React.ReactNode
}

export interface SelectProps<T = any> extends HeadlessUI.ListboxProps<Button, T, T> {
  options?: Array<SelectOption<T>>
  float?: Omit<FloatProps, "as" | "children" | "className">
}

function SelectComponent<T = any>(
  { float, options, placeholder, size, variant, className, ...props }: SelectProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  function getValue(value?: any) {
    if (value?.length > 1) {
      return (
        <div className="flex items-center gap-2">
          {value.map((v: any) => (
            <span key={v} className="btn size-xs btn-primary btn-normal">
              {options?.find((el) => el.value === v)?.children}
            </span>
          ))}
        </div>
      )
    }
    return options?.find((el) => el.value === value)?.children || <span />
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
              <HeadlessUI.Listbox.Option as={React.Fragment} key={JSON.stringify(item)} value={item.value}>
                {({ selected }) => (
                  <div className="hover:bg-muted flex cursor-pointer items-center justify-between gap-6 rounded p-2 pr-8 transition-colors">
                    {item.children || (item.value as React.ReactNode)} {selected && <HiCheck />}
                  </div>
                )}
              </HeadlessUI.Listbox.Option>
            ))}
          </HeadlessUI.Listbox.Options>
        </Float>
      )}
    </HeadlessUI.Listbox>
  )
}

export const Select = React.forwardRef(SelectComponent) as <T = any>(
  props: SelectProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => ReturnType<typeof SelectComponent>
