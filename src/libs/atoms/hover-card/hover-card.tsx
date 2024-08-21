import { HoverCard, Portal } from "@ark-ui/react"
import React from "react"
import { createCtx, createNested } from "../utils"
import { hoverCard } from "./variants"

const { withRoot, withSlot } = createCtx(hoverCard)

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

Component.displayName = "HoverCard"
