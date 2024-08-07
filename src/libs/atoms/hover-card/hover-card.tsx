import { HoverCard, HoverCardRootProps, Portal } from "@ark-ui/react"
import React from "react"
import { ComposedTVProps } from "../types"
import { createComponentCtx } from "../utils"
import { hoverCard } from "./variants"

const { withRoot, withSlot } = createComponentCtx(hoverCard)

export const Root = withRoot(HoverCard.Root)
export const RootProvider = withRoot(HoverCard.RootProvider)
export const Context = withSlot(HoverCard.Context)
export const Positioner = withSlot(HoverCard.Positioner)
export const Trigger = withSlot(HoverCard.Trigger)

export const ArrowPrimitive = withSlot(HoverCard.Arrow)
export const ArrowTipPrimitive = withSlot(HoverCard.ArrowTip, "arrowTip")
export const ContentPrimitive = withSlot(HoverCard.Content, "content")

export interface HoverCardProps
  extends HoverCardRootProps,
    ComposedTVProps<typeof hoverCard> {}

export const Content = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ContentPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <Portal>
      <Positioner>
        <ContentPrimitive ref={ref} {...props}>
          {children}
        </ContentPrimitive>
      </Positioner>
    </Portal>
  )
})

Content.displayName = "HoverCarContent"

export const Arrow = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ArrowPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <ArrowPrimitive ref={ref} {...props}>
      <ArrowTipPrimitive />
    </ArrowPrimitive>
  )
})

Content.displayName = "HoverCarContent"
