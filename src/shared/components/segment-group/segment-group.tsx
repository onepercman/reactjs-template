"use client"

import { SegmentGroup } from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { segmentGroup } from "./variants"

const { withRoot, withSlot } = createComponentFactory(segmentGroup)

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
  React.ElementRef<typeof Item>,
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

interface SegmentGroup extends ComponentMetadata {
  (
    props: React.ComponentPropsWithoutRef<typeof Root>,
  ): React.ReactElement | null
}

function _bootstrap(
  render: (
    props: React.ComponentPropsWithoutRef<typeof Root>,
    ref: React.ForwardedRef<React.ElementRef<SegmentGroup>>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<
    React.ElementRef<SegmentGroup>,
    React.ComponentPropsWithoutRef<typeof Root>
  >(render) as unknown as SegmentGroup
}

export const CustomRoot = _bootstrap(function ({ children, ...props }, ref) {
  return (
    <Root ref={ref} {...props}>
      <Indicator />
      {children}
    </Root>
  )
})

export const Component = createComponentTree(CustomRoot, {
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
