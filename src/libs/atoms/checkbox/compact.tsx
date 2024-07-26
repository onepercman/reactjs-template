import * as Ark from "@ark-ui/react"
import React from "react"
import { LuCheck, LuMinus } from "react-icons/lu"
import { ComposedTVProps } from "../types"
import { checkbox } from "./variants"

export interface CheckboxProps
  extends Ark.CheckboxRootProps,
    ComposedTVProps<typeof checkbox> {
  indeterminate?: boolean
}

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  function (
    {
      size,
      children,
      placement,
      indeterminate,
      className,
      classNames,
      ...props
    },
    ref,
  ) {
    const styles = checkbox({ size, placement, indeterminate, className })

    return (
      <Ark.Checkbox.Root
        ref={ref}
        {...props}
        className={styles.base({ class: classNames?.base })}
      >
        <Ark.Checkbox.Label
          className={styles.label({ class: classNames?.label })}
        >
          {children}
        </Ark.Checkbox.Label>
        <Ark.Checkbox.Control
          className={styles.control({ class: classNames?.control })}
        >
          <Ark.Checkbox.Indicator className="m-auto duration-300 data-[state=checked]:animate-in data-[state=unchecked]:animate-out data-[state=checked]:zoom-in data-[state=unchecked]:zoom-out">
            {indeterminate ? (
              <LuMinus strokeWidth={6} />
            ) : (
              <LuCheck strokeWidth={4} />
            )}
          </Ark.Checkbox.Indicator>
        </Ark.Checkbox.Control>
        <Ark.Checkbox.HiddenInput />
      </Ark.Checkbox.Root>
    )
  },
)

Checkbox.displayName = "Checkbox"
