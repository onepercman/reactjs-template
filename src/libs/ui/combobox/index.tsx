import { cn } from "@/libs/tailwind-variants"
import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiCheck } from "react-icons/hi"
import { Button } from "../button"
import { Input } from "../input"

export interface ComboboxOption<T = any> extends HeadlessUI.ComboboxOptionProps<Button, T> {
  children?: React.ReactNode
}

export type ComboboxProps<
  Value,
  Nullable extends boolean | undefined,
  Multiple extends boolean | undefined,
> = HeadlessUI.ComboboxProps<Value, Nullable, Multiple, Input> & {
  options?: Array<ComboboxOption<Value>>
  float?: Omit<FloatProps, "as" | "children" | "className">
}

interface Combobox extends ForwardedRefComponent {
  <Value, Nullable extends boolean | undefined, Multiple extends boolean | undefined>(
    props: ForwardRefWithAsProps<Input, ComboboxProps<Value, Nullable, Multiple>>,
  ): React.ReactElement | null
}

function _generate<Value, Nullable extends boolean | undefined, Multiple extends boolean | undefined>(
  render: <Value, Nullable extends boolean | undefined, Multiple extends boolean | undefined>(
    props: ComboboxProps<Value, Nullable, Multiple>,
    ref: React.ForwardedRef<Input>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<Input, ComboboxProps<Value, Nullable, Multiple>>(render) as unknown as Combobox
}

export const Combobox = _generate(function ({ float, options, size, variant, className, placeholder, ...props }, ref) {
  return (
    <HeadlessUI.Combobox ref={ref} {...(props as any)}>
      <Float
        portal={true}
        flip={10}
        shift={10}
        offset={8}
        adaptiveWidth
        enter="ease-out duration-100"
        enterFrom="opacity-0 -translate-y-3"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-3"
        {...float}
      >
        <HeadlessUI.Combobox.Button as={React.Fragment}>
          <HeadlessUI.Combobox.Input
            as={Input}
            className={cn("relative justify-between", className as string)}
            size={size}
            variant={variant}
            placeholder={placeholder}
            displayValue={function (value: any) {
              if (typeof value === "object") {
                const activeValues = value
                  .map(function (v: any) {
                    const activeValue = options?.find((el) => el.value === v)
                    return activeValue?.children || activeValue?.value || (undefined as any)
                  })
                  .join(", ")
                return activeValues
              }
              const activeValue = options?.find((el) => el.value === value)
              return activeValue?.children || activeValue?.value || (undefined as any)
            }}
          />
        </HeadlessUI.Combobox.Button>

        <HeadlessUI.Combobox.Options className="bg-component border-line flex flex-col overflow-hidden rounded border p-1 shadow">
          {options?.map((item) => (
            <HeadlessUI.Combobox.Option as={React.Fragment} key={JSON.stringify(item)} value={item.value}>
              {({ selected }) => (
                <div className="hover:bg-muted gap-base flex cursor-pointer items-center justify-between rounded p-2 pr-8 transition-colors">
                  {item.children || (item.value as React.ReactNode)} {selected && <HiCheck />}
                </div>
              )}
            </HeadlessUI.Combobox.Option>
          ))}
        </HeadlessUI.Combobox.Options>
      </Float>
    </HeadlessUI.Combobox>
  )
})

Combobox.displayName = "Combobox"
