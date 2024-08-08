import { Tooltip, TooltipRootProps } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { tooltip } from "./variants"

const { withRoot, withSlot } = createComponentCtx(tooltip)

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

export interface Tooltip extends ForwardedRefComponent {
  (props: TooltipRootProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Context: typeof Context
  Positioner: typeof Positioner
  Trigger: typeof Trigger
  Arrow: typeof CustomArrow
  ArrowTip: typeof ArrowTip
  Content: typeof CustomContent
}

export const Component = Root as any as Tooltip

Component.displayName = "Tooltip"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Context = Context
Component.Positioner = Positioner
Component.Trigger = Trigger
Component.Arrow = CustomArrow
Component.ArrowTip = ArrowTip
Component.Content = CustomContent
