"use client"

import { RadioGroup } from "@ark-ui/react"
import React from "react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { radioGroup } from "./variants"

const { withRoot, withSlot } = createComponentFactory(radioGroup)

const Root = withRoot(RadioGroup.Root, "base")
const RootProvider = withRoot(RadioGroup.RootProvider)
const Context = withSlot(RadioGroup.Context)
const Indicator = withSlot(RadioGroup.Indicator)
const Item = withSlot(RadioGroup.Item, "item")
const ItemContext = withSlot(RadioGroup.ItemContext)
const ItemControl = withSlot(RadioGroup.ItemControl, "control")
const ItemHiddenInput = withSlot(RadioGroup.ItemHiddenInput)
const ItemText = withSlot(RadioGroup.ItemText, "itemText")
const Label = withSlot(RadioGroup.Label)

const CustomItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(function ({ children, ...props }, ref) {
  return (
    <Item ref={ref} {...props}>
      <ItemControl />
      <ItemText>{children}</ItemText>
      <ItemHiddenInput />
    </Item>
  )
})

CustomItem.displayName = "Item"

export const Component = createComponentTree(Root, {
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

Component.displayName = "RadioGroup"
