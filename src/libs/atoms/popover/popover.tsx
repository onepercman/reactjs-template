import { Popover } from "@ark-ui/react"
import React from "react"
import { createComponentCtx } from "../utils"
import { popover } from "./variants"

const { withRoot, withSlot } = createComponentCtx(popover)

export const Root = withRoot(Popover.Root)
export const Anchor = withSlot(Popover.Anchor)
export const ArrowTip = withSlot(Popover.ArrowTip)
export const CloseTrigger = withSlot(Popover.CloseTrigger)
export const Context = withSlot(Popover.Context)
export const Description = withSlot(Popover.Description)
export const Indicator = withSlot(Popover.Indicator)
export const Positioner = withSlot(Popover.Positioner)
export const RootProvider = withSlot(Popover.RootProvider)
export const Title = withSlot(Popover.Title)
export const Trigger = withSlot(Popover.Trigger)

export const ArrowPrimitive = withSlot(Popover.Arrow)
export const ArrowTipPrimitive = withSlot(Popover.ArrowTip, "arrowTip")
export const ContentPrimitive = withSlot(Popover.Content, "content")

export const Content = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ContentPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <Positioner>
      <ContentPrimitive ref={ref} {...props}>
        {children}
      </ContentPrimitive>
    </Positioner>
  )
})

Content.displayName = "Content"

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
