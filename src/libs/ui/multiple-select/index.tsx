"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React, { useEffect, useState } from "react"
import { HiChevronDown, HiX } from "react-icons/hi"
import { Button } from "../button"
import { cn } from "../utils/className"

interface MultipleSelectOption {
  label?: React.ReactNode
  value?: any
}

export interface MultipleSelectProps extends HeadlessUI.ListboxProps<Button, any, any> {
  options?: Array<MultipleSelectOption>
  float?: Omit<FloatProps, "as" | "children" | "className">
  selected?: any[]
}

export const MultipleSelect = React.forwardRef<HTMLDivElement, MultipleSelectProps>(function (
  { float, options, selected, onChange, placeholder, size, variant, className, ...props },
  ref,
) {
  const [internalSelected, setInternalSelected] = useState<any[]>([])

  useEffect(() => {
    setInternalSelected(selected || [])
  }, [selected])

  function isSelected(value: any): boolean {
    if (!internalSelected.length) return false
    return internalSelected.includes(value)
  }

  function getSelectedItems() {
    if (!options) return
    const internalSelectedValue = internalSelected.map((item) => item.value)
    return options.filter((o) => internalSelectedValue.includes(o.value))
  }

  function renderSelectedItems() {
    const selectedItems = getSelectedItems()
    if (!selectedItems?.length) return
    return selectedItems.map((item) => (
      <Button
        size="xs"
        shape="normal"
        variant="primary"
        rightIcon={<HiX />}
        key={item.value}
        onClick={function (e) {
          e.stopPropagation()
          if (!internalSelected.length) return
          const values = internalSelected.filter((s) => s.value !== item.value)
          setInternalSelected(values)
          onChange && onChange(values)
        }}
      >
        {item?.label}
      </Button>
    ))
  }

  return (
    <HeadlessUI.Listbox
      ref={ref}
      onChange={function (value) {
        if (isSelected(value)) {
          const values = internalSelected.filter((i) => i.value !== value)
          setInternalSelected(values)
          onChange && onChange(values)
        } else {
          const values = internalSelected.concat(value)
          setInternalSelected(values)
          onChange && onChange(values)
        }
      }}
      {...props}
    >
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
          className={cn("relative h-auto justify-between py-2", className)}
          rightIcon={<HiChevronDown />}
          shape="normal"
          size={size}
          variant={variant}
        >
          {getSelectedItems() ? (
            <div className="flex flex-wrap items-center gap-2">{renderSelectedItems()}</div>
          ) : (
            <span className="text-muted">{placeholder}</span>
          )}
        </HeadlessUI.Listbox.Button>
        <HeadlessUI.Listbox.Options className="bg-component border-line flex flex-col overflow-hidden rounded border p-1 shadow">
          {options?.map((item) => (
            <HeadlessUI.Listbox.Option as={React.Fragment} key={item.value} value={item}>
              <div
                className={cn(
                  "hover:bg-primary/80 group inline-flex cursor-pointer items-center justify-between rounded p-2 pr-8 transition-colors",
                  isSelected(item.value) && "bg-primary/20",
                )}
              >
                {item.label || item.value}{" "}
                <HiX className={cn("text-primary", isSelected(item.value) ? "opacity-100" : "opacity-0")} />
              </div>
            </HeadlessUI.Listbox.Option>
          ))}
        </HeadlessUI.Listbox.Options>
      </Float>
    </HeadlessUI.Listbox>
  )
})

MultipleSelect.displayName = "MultipleSelect"
