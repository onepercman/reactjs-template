import { SegmentGroup } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createCtx, createNested } from "../utils"
import { segmentGroup } from "./variants"

const { withRoot, withSlot } = createCtx(segmentGroup)

const Root = withRoot(SegmentGroup.Root, "base")
const RootProvider = withRoot(SegmentGroup.RootProvider, "base")
const Context = withSlot(SegmentGroup.Context)
const Indicator = withSlot(SegmentGroup.Indicator, "indicator")
const Item = withSlot(SegmentGroup.Item, "item")
const ItemContext = withSlot(SegmentGroup.ItemContext)
const ItemControl = withSlot(SegmentGroup.ItemControl)
const ItemHiddenInput = withSlot(SegmentGroup.ItemHiddenInput)
const ItemText = withSlot(SegmentGroup.ItemText)
const Label = withSlot(SegmentGroup.Label)

const CustomItem = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof Item>
>(function ({ children, ...props }, ref) {
  return (
    <Item ref={ref} {...props}>
      <ItemText>{children}</ItemText>
      <ItemControl />
      <ItemHiddenInput />
    </Item>
  )
})

CustomItem.displayName = "Item"

interface SegmentGroup extends ForwardedRefComponent {
  (props: React.ComponentProps<typeof Root>): React.ReactElement | null
}

function _bootstrap(
  render: (
    props: React.ComponentProps<typeof Root>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Root>>(
    render,
  ) as unknown as SegmentGroup
}

export const CustomRoot = _bootstrap(function ({ children, ...props }, ref) {
  return (
    <Root ref={ref} {...props}>
      <Indicator />
      {children}
    </Root>
  )
})

export const Component = createNested(CustomRoot, {
  Root,
  RootProvider,
  Context,
  Indicator,
  Item: CustomItem,
  ItemContext,
  ItemControl,
  ItemHiddenInput,
  ItemText,
  Label,
})

Component.displayName = "SegmentGroup"
