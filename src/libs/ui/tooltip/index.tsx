import {
  TooltipSlotsClasses,
  TooltipVariantProps,
  tooltip,
} from "@/libs/ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"

interface TooltipProps
  extends Ark.TooltipRootProps,
    TooltipVariantProps,
    TooltipSlotsClasses {
  className?: string
  content?: React.ReactNode
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(function (
  { children, content, size, className, classNames, ...props },
  ref,
) {
  const classes = tooltip({ size, className })

  return (
    <Ark.Tooltip.Root openDelay={200} closeDelay={200} {...props}>
      <Ark.Tooltip.Trigger asChild>{children}</Ark.Tooltip.Trigger>
      <Ark.Tooltip.Positioner>
        <Ark.Tooltip.Content
          ref={ref}
          className={classes.base({ class: classNames?.base })}
        >
          <Ark.Tooltip.Arrow
            style={
              {
                "--arrow-size": "6px",
                "--arrow-offset": "-3px",
              } as React.CSSProperties
            }
          >
            <Ark.Tooltip.ArrowTip
              className={classes.arrow({ class: classNames?.arrow })}
            />
          </Ark.Tooltip.Arrow>
          {content}
        </Ark.Tooltip.Content>
      </Ark.Tooltip.Positioner>
    </Ark.Tooltip.Root>
  )
})
