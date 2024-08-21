import { Tooltip } from "@ark-ui/react"
import React from "react"
import { createCtx, createNested } from "../utils"
import { tooltip } from "./variants"

const { withRoot, withSlot } = createCtx(tooltip)

const Root = withRoot(Tooltip.Root)
const RootProvider = withRoot(Tooltip.RootProvider)
const Context = withSlot(Tooltip.Context)
const Positioner = withSlot(Tooltip.Positioner)
const Trigger = withSlot(Tooltip.Trigger)
const Arrow = withSlot(Tooltip.Arrow)
const ArrowTip = withSlot(Tooltip.ArrowTip, "arrowTip")
const Content = withSlot(Tooltip.Content, "content")

const CustomContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Content>>(function (
  { children, ...props },
  ref,
) {
  return (
    <Positioner>
      <Content ref={ref} {...props}>
        {children}
      </Content>
    </Positioner>
  )
})

CustomContent.displayName = "Content"

const CustomArrow = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Arrow>>(function (
  { children, ...props },
  ref,
) {
  return (
    <Arrow ref={ref} {...props}>
      <ArrowTip />
    </Arrow>
  )
})

CustomArrow.displayName = "Arrow"

export const Component = createNested(Root, {
  Root,
  RootProvider,
  Context,
  Positioner,
  Trigger,
  Arrow: CustomArrow,
  ArrowTip,
  Content: CustomContent,
})

Component.displayName = "Tooltip"
