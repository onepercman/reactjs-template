import { Tooltip } from "@ark-ui/react"
import React from "react"
import { createComponentCtx } from "../utils"
import { tooltip } from "./variants"

const { withRoot, withSlot } = createComponentCtx(tooltip)

export const Root = withRoot(Tooltip.Root)
export const RootProvider = withRoot(Tooltip.RootProvider)
export const Context = withSlot(Tooltip.Context)
export const Positioner = withSlot(Tooltip.Positioner)
export const Trigger = withSlot(Tooltip.Trigger)

export const ArrowPrimitive = withSlot(Tooltip.Arrow)
export const ArrowTipPrimitive = withSlot(Tooltip.ArrowTip, "arrowTip")
export const ContentPrimitive = withSlot(Tooltip.Content, "content")

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
