import { SegmentGroup, SegmentGroupRootProps } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { segmentGroup } from "./variants"

const { withRoot, withSlot } = createComponentCtx(segmentGroup)

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

const CustomItem = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<typeof Item>>(function (
  { children, ...props },
  ref,
) {
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
  (props: SegmentGroupRootProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Context: typeof Context
  Indicator: typeof Indicator
  Item: typeof CustomItem
  ItemContext: typeof ItemContext
  ItemControl: typeof ItemControl
  ItemHiddenInput: typeof ItemHiddenInput
  ItemText: typeof ItemText
  Label: typeof Label
}

function _bootstrap(
  render: (props: SegmentGroupRootProps, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, SegmentGroupRootProps>(render) as unknown as SegmentGroup
}

export const Component = _bootstrap(function ({ children, ...props }, ref) {
  return (
    <Root ref={ref} {...props}>
      <Indicator />
      {children}
    </Root>
  )
})

Component.displayName = "SegmentGroup"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Context = Context
Component.Indicator = Indicator
Component.Item = CustomItem
Component.ItemContext = ItemContext
Component.ItemControl = ItemControl
Component.ItemHiddenInput = ItemHiddenInput
Component.ItemText = ItemText
Component.Label = Label
