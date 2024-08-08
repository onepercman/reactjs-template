import { Popover, PopoverRootProps } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { popover } from "./variants"

const { withRoot, withSlot } = createComponentCtx(popover)

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

export interface Popover extends ForwardedRefComponent {
  (props: PopoverRootProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Anchor: typeof Anchor
  Arrow: typeof CustomArrow
  ArrowTip: typeof ArrowTip
  CloseTrigger: typeof CloseTrigger
  Context: typeof Context
  Content: typeof CustomContent
  Description: typeof Description
  Indicator: typeof Indicator
  Positioner: typeof Positioner
  Title: typeof Title
  Trigger: typeof Trigger
}

export const Component = Root as any as Popover

Component.Root = Root
Component.RootProvider = RootProvider
Component.Anchor = Anchor
Component.Arrow = CustomArrow
Component.ArrowTip = ArrowTip
Component.CloseTrigger = CloseTrigger
Component.Context = Context
Component.Content = CustomContent
Component.Description = Description
Component.Indicator = Indicator
Component.Positioner = Positioner
Component.Title = Title
Component.Trigger = Trigger
