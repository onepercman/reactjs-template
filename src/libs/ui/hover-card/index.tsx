import {
  HoverCardSlotsClasses,
  HoverCardVariantProps,
  hoverCard,
} from "@/libs/ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"

interface HoverCardProps
  extends Ark.HoverCardRootProps,
    HoverCardVariantProps,
    HoverCardSlotsClasses {
  className?: string
  content?: React.ReactNode
}

export const HoverCard = React.forwardRef<HTMLDivElement, HoverCardProps>(
  function ({ children, content, size, className, classNames, ...props }, ref) {
    const classes = hoverCard({ size, className })

    return (
      <Ark.HoverCard.Root openDelay={200} closeDelay={200} {...props}>
        <Ark.HoverCard.Trigger asChild>{children}</Ark.HoverCard.Trigger>
        <Ark.Portal>
          <Ark.HoverCard.Positioner>
            <Ark.HoverCard.Content
              ref={ref}
              className={classes.base({ class: classNames?.base })}
            >
              <Ark.HoverCard.Arrow
                style={
                  {
                    "--arrow-size": "6px",
                    "--arrow-offset": "-3px",
                  } as React.CSSProperties
                }
              >
                <Ark.HoverCard.ArrowTip
                  className={classes.arrow({ class: classNames?.arrow })}
                />
              </Ark.HoverCard.Arrow>
              {content}
            </Ark.HoverCard.Content>
          </Ark.HoverCard.Positioner>
        </Ark.Portal>
      </Ark.HoverCard.Root>
    )
  },
)
