import { HoverCard, HoverCardRootProps, Portal } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { hoverCard } from "./variants"

const { withRoot, withSlot } = createComponentCtx(hoverCard)

const Root = withRoot(HoverCard.Root)
const RootProvider = withRoot(HoverCard.RootProvider)
const Context = withSlot(HoverCard.Context)
const Positioner = withSlot(HoverCard.Positioner)
const Trigger = withSlot(HoverCard.Trigger)
const Arrow = withSlot(HoverCard.Arrow)
const ArrowTip = withSlot(HoverCard.ArrowTip, "arrowTip")
const Content = withSlot(HoverCard.Content, "content")

const CustomContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Content>>(function (
  { children, ...props },
  ref,
) {
  return (
    <Portal>
      <Positioner>
        <Content ref={ref} {...props}>
          {children}
        </Content>
      </Positioner>
    </Portal>
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

export interface HoverCard extends ForwardedRefComponent {
  (props: HoverCardRootProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Context: typeof Context
  Positioner: typeof Positioner
  Trigger: typeof Trigger
  Arrow: typeof CustomArrow
  ArrowTip: typeof ArrowTip
  Content: typeof CustomContent
}

export const Component = Root as any as HoverCard

Component.displayName = "HoverCard"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Context = Context
Component.Positioner = Positioner
Component.Trigger = Trigger
Component.Arrow = CustomArrow
Component.ArrowTip = ArrowTip
Component.Content = CustomContent
