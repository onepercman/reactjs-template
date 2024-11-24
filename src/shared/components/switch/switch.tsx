import { Switch, SwitchRootProps } from "@ark-ui/react"
import React from "react"
import { ComposedTVProps } from "react-tvcx"
import { switchVariants } from "./variants"

export interface SwitchProps
  extends SwitchRootProps,
    ComposedTVProps<typeof switchVariants> {
  indeterminate?: boolean
}

export const Component = React.forwardRef<HTMLLabelElement, SwitchProps>(
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
    const styles = switchVariants({
      size,
      placement,
      indeterminate,
      className,
    })

    return (
      <Switch.Root
        ref={ref}
        {...props}
        className={styles.base({ class: classNames?.base })}
      >
        <Switch.Label className={styles.label({ class: classNames?.label })}>
          {children}
        </Switch.Label>
        <Switch.Control
          className={styles.control({ class: classNames?.control })}
        >
          <Switch.Thumb
            className={styles.thumb({ class: classNames?.thumb })}
          />
        </Switch.Control>
        <Switch.HiddenInput />
      </Switch.Root>
    )
  },
)

Component.displayName = "Switch"
