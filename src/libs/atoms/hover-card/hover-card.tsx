import * as Ark from "@ark-ui/react"
import React from "react"
import { ComposedTVProps } from "../types"
import { hoverCard } from "../variants"

export interface HoverCardProps
  extends Ark.HoverCardRootProps,
    ComposedTVProps<typeof hoverCard> {
  className?: string
  content?: React.ReactNode
}

export const HoverCard = React.forwardRef<HTMLDivElement, HoverCardProps>(
  function ({ children, content, size, className, classNames, ...props }, ref) {
    const styles = hoverCard({ size, className })

    return (
      <Ark.HoverCard.Root openDelay={200} closeDelay={200} {...props}>
        <Ark.HoverCard.Trigger asChild>{children}</Ark.HoverCard.Trigger>
        <Ark.Portal>
          <Ark.HoverCard.Positioner>
            <Ark.HoverCard.Content
              ref={ref}
              className={styles.base({ class: classNames?.base })}
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
                  className={styles.arrow({ class: classNames?.arrow })}
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

HoverCard.displayName = "HoverCard"
