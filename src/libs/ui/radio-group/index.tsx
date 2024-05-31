import { cn } from "@/libs/tailwind-variants"
import React, { ChangeEventHandler } from "react"
import { Input } from "../input"

export interface RadioGroupOption
  extends React.HTMLAttributes<HTMLLabelElement> {
  label?: React.ReactNode
  value: string
}

export interface RadioGroupProps {
  options?: RadioGroupOption[]
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

interface RadioGroup extends ForwardedRefComponent {
  <Tag extends ReactTag>(
    props: ForwardRefWithAsProps<Tag, RadioGroupProps>,
  ): React.ReactElement | null
}

function _generate<Tag extends ReactTag>(
  render: <Tag extends ReactTag>(
    props: ForwardRefWithAsProps<Tag, RadioGroupProps>,
    ref: React.ForwardedRef<Tag>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<Tag, ForwardRefWithAsProps<Tag, RadioGroupProps>>(
    render,
  ) as unknown as RadioGroup
}

export const RadioGroup = _generate(function (
  { as = "div", options, name, value, defaultValue, className, ...props },
  ref,
) {
  const Tag = as

  return (
    <Tag ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
      {options?.map(({ label, value: optionValue, className, ...option }) => (
        <label
          key={optionValue}
          role="button"
          className={cn("inline-flex items-center gap-2", className)}
          {...option}
        >
          <Input.Radio
            name={name}
            value={optionValue}
            checked={value !== undefined ? value === optionValue : undefined}
            defaultChecked={
              defaultValue !== undefined
                ? optionValue === defaultValue
                : undefined
            }
          />{" "}
          {label}
        </label>
      ))}
    </Tag>
  )
})

RadioGroup.displayName = "RadioGroup"
