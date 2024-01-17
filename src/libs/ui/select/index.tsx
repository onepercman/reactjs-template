import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiCheck, HiChevronDown } from "react-icons/hi"
import { Button, ButtonVariantProps } from "../button"
import { cn } from "../utils/className"
import { ForwardRefWithAsProps, ForwardedRefComponent, ReactTag } from "../utils/ref"

export interface SelectOption<Value> extends HeadlessUI.ListboxOptionProps<"div", Value> {
  children?: React.ReactNode
}

export type SelectProps<As extends ReactTag, Value> = HeadlessUI.ListboxProps<As, Value, Value> &
  ButtonVariantProps & {
    options?: Array<SelectOption<Value>>
    float?: Omit<FloatProps, "as" | "children" | "className">
    className?: string
    placeholder?: string
  }

interface Select extends ForwardedRefComponent {
  <As extends ReactTag, Value>(props: ForwardRefWithAsProps<As, SelectProps<As, Value>>): React.ReactElement | null
}

function _generate<Value, As extends ReactTag = typeof React.Fragment>(
  render: <As extends ReactTag, Value>(
    props: SelectProps<As, Value>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLElement, SelectProps<As, Value>>(render) as unknown as Select
}

export const Select = _generate(function (
  { as = React.Fragment as ReactTag, multiple, float, options, size, variant, className, placeholder, ...props },
  ref,
) {
  function getValue(value?: any) {
    if (multiple) {
      return (
        <div className="flex flex-wrap items-center gap-2 py-1">
          {value.map((v: any) => (
            <span key={v} className="btn size-xs btn-primary btn-normal">
              {options?.find((el) => el.value === v)?.children}
            </span>
          ))}
        </div>
      )
    }
    return (
      options?.find((el) => el.value === value)?.children || <span className="text-muted">{placeholder}</span> || (
        <span />
      )
    )
  }

  return (
    <HeadlessUI.Listbox ref={ref} as={as} multiple={multiple} {...(props as any)}>
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
            className={cn("relative justify-between", multiple && "h-fit", className)}
            rightIcon={<HiChevronDown />}
            size={size}
            variant={variant}
          >
            {getValue(internalValue)}
          </HeadlessUI.Listbox.Button>
          <HeadlessUI.Listbox.Options className="bg-component border-line flex flex-col overflow-hidden rounded border p-1 shadow">
            {options?.map((item) => (
              <HeadlessUI.Listbox.Option as={React.Fragment} key={JSON.stringify(item)} value={item.value}>
                {({ selected }) => (
                  <div className="hover:bg-muted gap-base flex cursor-pointer items-center justify-between rounded p-2 pr-8 transition-colors">
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
})

Select.displayName = "Select"
