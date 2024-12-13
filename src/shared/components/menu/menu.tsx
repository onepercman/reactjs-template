"use client"

import { Menu } from "@ark-ui/react"
import React from "react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { menu } from "./variants"

const { withRoot, withSlot } = createComponentFactory(menu)

const Root = withRoot(Menu.Root)
const RootProvider = withRoot(Menu.RootProvider)
const Arrow = withSlot(Menu.Arrow)
const ArrowTip = withSlot(Menu.ArrowTip)
const CheckboxItem = withSlot(Menu.CheckboxItem)
const Context = withSlot(Menu.Context)
const ContextTrigger = withSlot(Menu.ContextTrigger)
const Indicator = withSlot(Menu.Indicator)
const Item = withSlot(Menu.Item, "item")
const ItemContext = withSlot(Menu.ItemContext)
const ItemGroup = withSlot(Menu.ItemGroup, "itemGroup")
const ItemGroupLabel = withSlot(Menu.ItemGroupLabel, "itemGroupLabel")
const ItemIndicator = withSlot(Menu.ItemIndicator, "itemIndicator")
const ItemText = withSlot(Menu.ItemText)
const Positioner = withSlot(Menu.Positioner)
const RadioItem = withSlot(Menu.RadioItem, "item")
const RadioItemGroup = withSlot(Menu.RadioItemGroup, "itemGroup")
const Separator = withSlot(Menu.Separator, "separator")
const Trigger = withSlot(Menu.Trigger)
const TriggerItem = withSlot(Menu.TriggerItem)
const Content = withSlot(Menu.Content, "content")

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

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Arrow,
  ArrowTip,
  CheckboxItem,
  Context,
  ContextTrigger,
  Indicator,
  Item,
  ItemContext,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Positioner,
  RadioItem,
  RadioItemGroup,
  Separator,
  Trigger,
  TriggerItem,
  Content: CustomContent,
})

Component.displayName = "Menu"
