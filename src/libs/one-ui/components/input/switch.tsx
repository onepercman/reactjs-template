import {
  SwitchSlotsClasses,
  SwitchVariantProps,
  switchVariants,
} from "@/libs/one-ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"

export interface SwitchProps
  extends Ark.SwitchRootProps,
    SwitchVariantProps,
    SwitchSlotsClasses {
  indeterminate?: boolean
}

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(function (
  { size, children, placement, indeterminate, className, classNames, ...props },
  ref,
) {
  const classes = switchVariants({ size, placement, indeterminate, className })

  return (
    <Ark.Switch.Root
      ref={ref}
      {...props}
      className={classes.base({ class: classNames?.base })}
    >
      <Ark.Switch.Label className={classes.label({ class: classNames?.label })}>
        {children}
      </Ark.Switch.Label>
      <Ark.Switch.Control
        className={classes.control({ class: classNames?.control })}
      >
        <Ark.Switch.Thumb
          className={classes.thumb({ class: classNames?.thumb })}
        />
      </Ark.Switch.Control>
      <Ark.Switch.HiddenInput />
    </Ark.Switch.Root>
  )
})

Switch.displayName = "Switch"
