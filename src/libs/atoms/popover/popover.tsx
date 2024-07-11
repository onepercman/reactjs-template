import * as Ark from "@ark-ui/react"
import React from "react"
import { ComposedTVProps } from "../types"
import { popover } from "../variants"
export interface PopoverProps
  extends Ark.PopoverRootProps,
    ComposedTVProps<typeof popover> {
  className?: string
  content?: React.ReactNode
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(function (
  { children, content, size, className, classNames, ...props },
  ref,
) {
  const styles = popover({ size, className })

  return (
    <Ark.Popover.Root {...props}>
      <Ark.Popover.Trigger asChild>{children}</Ark.Popover.Trigger>
      <Ark.Popover.Positioner>
        <Ark.Popover.Content
          ref={ref}
          className={styles.base({ class: classNames?.base })}
        >
          <Ark.Popover.Arrow
            style={
              {
                "--arrow-size": "6px",
                "--arrow-offset": "-3px",
              } as React.CSSProperties
            }
          >
            <Ark.Popover.ArrowTip
              className={styles.arrow({ class: classNames?.arrow })}
            />
          </Ark.Popover.Arrow>
          {content}
        </Ark.Popover.Content>
      </Ark.Popover.Positioner>
    </Ark.Popover.Root>
  )
})

Popover.displayName = "Popover"
