import { Popover } from "@ark-ui/react"
import React from "react"
import { createComponentTree, createCtx } from "../utils"
import { popover } from "./variants"

const { withRoot, withSlot } = createCtx(popover)

const Root = withRoot(Popover.Root)
const RootProvider = withRoot(Popover.RootProvider)
const Anchor = withSlot(Popover.Anchor)
const Arrow = withSlot(Popover.Arrow)
const ArrowTip = withSlot(Popover.ArrowTip)
const CloseTrigger = withSlot(Popover.CloseTrigger)
const Context = withSlot(Popover.Context)
const Content = withSlot(Popover.Content, "content")
const Description = withSlot(Popover.Description)
const Indicator = withSlot(Popover.Indicator)
const Positioner = withSlot(Popover.Positioner)
const Title = withSlot(Popover.Title)
const Trigger = withSlot(Popover.Trigger)

const CustomContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Content>
>(function ({ children, ...props }, ref) {
  return (
    <Positioner>
      <Content ref={ref} {...props}>
        {children}
      </Content>
    </Positioner>
  )
})

CustomContent.displayName = "Content"

const CustomArrow = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Arrow>
>(function ({ children, ...props }, ref) {
  return (
    <Arrow ref={ref} {...props}>
      <ArrowTip />
    </Arrow>
  )
})

CustomArrow.displayName = "Arrow"

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Anchor,
  Arrow: CustomArrow,
  ArrowTip,
  CloseTrigger,
  Context,
  Content: CustomContent,
  Description,
  Indicator,
  Positioner,
  Title,
  Trigger,
})

Component.displayName = "Popover"
