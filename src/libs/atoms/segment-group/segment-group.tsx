import { SegmentGroup } from "@ark-ui/react"
import React from "react"
import { createComponentCtx } from "../utils"
import { segmentGroup } from "./variants"

const { withRoot, withSlot } = createComponentCtx(segmentGroup)

export const RootPrimitive = withRoot(SegmentGroup.Root, "base")
export const RootProvider = withRoot(SegmentGroup.RootProvider, "base")
export const Context = withSlot(SegmentGroup.Context)
export const Indicator = withSlot(SegmentGroup.Indicator, "indicator")
export const ItemPrimitive = withSlot(SegmentGroup.Item, "item")
export const ItemContext = withSlot(SegmentGroup.ItemContext)
export const ItemControl = withSlot(SegmentGroup.ItemControl)
export const ItemHiddenInput = withSlot(SegmentGroup.ItemHiddenInput)
export const ItemText = withSlot(SegmentGroup.ItemText)
export const Label = withSlot(SegmentGroup.Label)

export const Root = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof RootPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <RootPrimitive ref={ref} {...props}>
      <Indicator />
      {children}
    </RootPrimitive>
  )
})

Root.displayName = "Root"

export const Item = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof ItemPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <ItemPrimitive ref={ref} {...props}>
      <ItemText>{children}</ItemText>
      <ItemControl />
      <ItemHiddenInput />
    </ItemPrimitive>
  )
})

Item.displayName = "Item"
