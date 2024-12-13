"use client"

import { HoverCard } from "@ark-ui/react"
import React from "react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { hoverCard } from "./variants"

const { withRoot, withSlot } = createComponentFactory(hoverCard)

const Root = withRoot(HoverCard.Root)
const RootProvider = withRoot(HoverCard.RootProvider)
const Context = withSlot(HoverCard.Context)
const Positioner = withSlot(HoverCard.Positioner)
const Trigger = withSlot(HoverCard.Trigger)
const Arrow = withSlot(HoverCard.Arrow)
const ArrowTip = withSlot(HoverCard.ArrowTip, "arrowTip")
const Content = withSlot(HoverCard.Content, "content")

const CustomContent = React.forwardRef<
  React.ElementRef<typeof Content>,
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
  React.ElementRef<typeof Arrow>,
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
  Context,
  Positioner,
  Trigger,
  Arrow: CustomArrow,
  ArrowTip,
  Content: CustomContent,
})

Component.displayName = "HoverCard"
