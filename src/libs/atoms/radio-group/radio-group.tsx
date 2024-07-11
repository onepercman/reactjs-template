import * as Ark from "@ark-ui/react"
import React from "react"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { radioGroup } from "../variants"

export interface RadioGroupOption extends Ark.RadioGroup.ItemProps {
  label?: React.ReactNode
}

export interface RadioGroupProps
  extends Ark.RadioGroupRootProps,
    ComposedTVProps<typeof radioGroup> {
  label?: React.ReactNode
  options?: RadioGroupOption[]
}

interface RadioGroup extends ForwardedRefComponent {
  (props: RadioGroupProps): React.ReactElement | null
}

function _constructor(
  render: (
    props: RadioGroupProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, RadioGroupProps>(
    render,
  ) as unknown as RadioGroup
}

export const RadioGroup = _constructor(function (
  { options, label, size, invalid, className, classNames, ...props },
  ref,
) {
  const styles = radioGroup({ size, invalid, className })

  return (
    <Ark.RadioGroup.Root
      ref={ref}
      className={styles.base({ class: classNames?.base })}
      {...props}
    >
      <Ark.RadioGroup.Indicator />
      {options?.map(({ label, ...item }) => (
        <Ark.RadioGroup.Item
          key={item.value}
          {...item}
          className={styles.item({ class: classNames?.item })}
        >
          <Ark.RadioGroup.ItemControl
            className={styles.control({ class: classNames?.control })}
          />
          <Ark.RadioGroup.ItemText
            className={styles.itemText({ class: classNames?.itemText })}
          >
            {label}
          </Ark.RadioGroup.ItemText>
          <Ark.RadioGroup.ItemHiddenInput />
        </Ark.RadioGroup.Item>
      ))}
    </Ark.RadioGroup.Root>
  )
})

RadioGroup.displayName = "RadioGroup"
