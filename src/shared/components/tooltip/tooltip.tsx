"use client"

import { Tooltip } from "@ark-ui/react"
import React from "react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { tooltip } from "./variants"

const { withRoot, withSlot } = createComponentFactory(tooltip)

const Root = withRoot(Tooltip.Root)
const RootProvider = withRoot(Tooltip.RootProvider)
const Context = withSlot(Tooltip.Context)
const Positioner = withSlot(Tooltip.Positioner)
const Trigger = withSlot(Tooltip.Trigger)
const Arrow = withSlot(Tooltip.Arrow, "arrow")
const ArrowTip = withSlot(Tooltip.ArrowTip, "arrowTip")
const Content = withSlot(Tooltip.Content, "content")

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

Component.displayName = "Tooltip"
