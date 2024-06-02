import * as Ark from "@ark-ui/react"
import React from "react"
import { VariantProps, tv } from "tailwind-variants"

const radioGroup = tv({
  base: "flex flex-col gap-2",
  slots: {
    label: "text-sm text-secondary",
    item: "inline-flex items-center gap-2 cursor-pointer",
    itemText: "",
    control:
      "rounded-full text-transparent border-2 border-line after:content-[''] after:h-full after:w-full after:rounded-full after:bg-transparent data-[state=checked]:after:bg-primary flex text-sm p-1 data-[hover]:border-primary duration-300 data-[state=checked]:border-primary",
  },
  variants: {
    size: {
      xs: { label: "text-xs", itemText: "text-xs", control: "h-4 w-4" },
      sm: { label: "text-sm", itemText: "text-sm", control: "h-5 w-5" },
      md: { label: "text-md", itemText: "text-md", control: "h-6 w-6" },
      lg: { label: "text-lg", itemText: "text-lg", control: "h-7 w-7" },
    },
    invalid: {
      true: {
        label: "text-error",
        control: "data-[state=checked]:border-error data-[state=checked]:after:bg-error",
        itemText: "data-[state=checked]:text-error",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface RadioGroupOption extends Ark.RadioGroup.ItemProps {
  label?: React.ReactNode
}

export interface RadioGroupProps extends Ark.RadioGroupRootProps, VariantProps<typeof radioGroup> {
  label?: React.ReactNode
  options?: RadioGroupOption[]
  invalid?: boolean
  invalidMessage?: React.ReactNode
}

interface RadioGroup extends ForwardedRefComponent {
  (props: RadioGroupProps): React.ReactElement | null
}

function _constructor(
  render: (props: RadioGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, RadioGroupProps>(render) as unknown as RadioGroup
}

export const RadioGroup = _constructor(function (
  { options, label, size, className, invalid, invalidMessage, ...props },
  ref,
) {
  const classes = radioGroup({ size, invalid, className })

  return (
    <Ark.RadioGroup.Root ref={ref} className={classes.base()} {...props}>
      <Ark.RadioGroup.Label className={classes.label()}>{label}</Ark.RadioGroup.Label>
      <Ark.RadioGroup.Indicator />
      {options?.map(({ label, ...item }) => (
        <Ark.RadioGroup.Item key={item.value} {...item} className={classes.item()}>
          <Ark.RadioGroup.ItemControl className={classes.control()} />
          <Ark.RadioGroup.ItemText className={classes.itemText()}>{label}</Ark.RadioGroup.ItemText>
          <Ark.RadioGroup.ItemHiddenInput />
        </Ark.RadioGroup.Item>
      ))}
      <Ark.Presence className="text-error animate-in fade-in text-xs" present={Boolean(invalid && invalidMessage)}>
        {invalidMessage}
      </Ark.Presence>
    </Ark.RadioGroup.Root>
  )
})

RadioGroup.displayName = "RadioGroup"
