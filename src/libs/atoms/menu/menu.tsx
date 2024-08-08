import { Menu, MenuRootProps, Portal } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { menu } from "./variants"

const { withRoot, withSlot } = createComponentCtx(menu)

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

export interface Menu extends ForwardedRefComponent {
  (props: MenuRootProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Arrow: typeof Arrow
  ArrowTip: typeof ArrowTip
  CheckboxItem: typeof CheckboxItem
  Context: typeof Context
  ContextTrigger: typeof ContextTrigger
  Indicator: typeof Indicator
  Item: typeof Item
  ItemContext: typeof ItemContext
  ItemGroup: typeof ItemGroup
  ItemGroupLabel: typeof ItemGroupLabel
  ItemIndicator: typeof ItemIndicator
  ItemText: typeof ItemText
  Positioner: typeof Positioner
  RadioItem: typeof RadioItem
  RadioItemGroup: typeof RadioItemGroup
  Separator: typeof Separator
  Trigger: typeof Trigger
  TriggerItem: typeof TriggerItem
  Content: typeof CustomContent
}

export const Component = Root as any as Menu

Component.displayName = "Menu"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Arrow = Arrow
Component.ArrowTip = ArrowTip
Component.CheckboxItem = CheckboxItem
Component.Context = Context
Component.ContextTrigger = ContextTrigger
Component.Indicator = Indicator
Component.Item = Item
Component.ItemContext = ItemContext
Component.ItemGroup = ItemGroup
Component.ItemGroupLabel = ItemGroupLabel
Component.ItemIndicator = ItemIndicator
Component.ItemText = ItemText
Component.Positioner = Positioner
Component.RadioItem = RadioItem
Component.RadioItemGroup = RadioItemGroup
Component.Separator = Separator
Component.Trigger = Trigger
Component.TriggerItem = TriggerItem
Component.Content = CustomContent
