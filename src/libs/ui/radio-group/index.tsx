import { radioGroup } from "@/libs/ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"
import { VariantProps } from "tailwind-variants"

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
