import { Portal, Select, SelectRootProps } from "@ark-ui/react"
import { CollectionItem } from "node_modules/@ark-ui/react/dist/types"
import React from "react"
import { LuChevronDown } from "react-icons/lu"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { select } from "./variants"

const { withRoot, withSlot } = createComponentCtx(select)

const Root = withRoot(Select.Root)
const RootProvider = withRoot(Select.RootProvider)
const Context = withSlot(Select.Context)
const ItemContext = withSlot(Select.ItemContext)
const Label = withSlot(Select.Label)
const Control = withSlot(Select.Control)
const Trigger = withSlot(Select.Trigger, "trigger")
const ValueText = withSlot(Select.ValueText, "valueText")
const ClearTrigger = withSlot(Select.ClearTrigger, "clearTrigger")
const Indicator = withSlot(Select.Indicator, "indicator")
const HiddenSelect = withSlot(Select.HiddenSelect)
const Positioner = withSlot(Select.Positioner)
const List = withSlot(Select.List)
const Content = withSlot(Select.Content, "content")
const ItemGroup = withSlot(Select.ItemGroup, "itemGroup")
const ItemGroupLabel = withSlot(Select.ItemGroupLabel, "ItemGroupLabel")
const Item = withSlot(Select.Item, "item")
const ItemText = withSlot(Select.ItemText, "itemText")
const ItemIndicator = withSlot(Select.ItemIndicator, "itemIndicator")

export interface SelectProps<T extends CollectionItem> extends SelectRootProps<T>, ComposedTVProps<typeof select> {
  placeholder?: string
}

export interface Select extends ForwardedRefComponent {
  <T extends CollectionItem>(props: SelectProps<T>): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Context: typeof Context
  ItemContext: typeof ItemContext
  Label: typeof Label
  Control: typeof Control
  Trigger: typeof Trigger
  ValueText: typeof ValueText
  ClearTrigger: typeof ClearTrigger
  Indicator: typeof Indicator
  HiddenSelect: typeof HiddenSelect
  Positioner: typeof Positioner
  List: typeof List
  Content: typeof Content
  ItemGroup: typeof ItemGroup
  ItemGroupLabel: typeof ItemGroupLabel
  Item: typeof Item
  ItemText: typeof ItemText
  ItemIndicator: typeof ItemIndicator
}

function _bootstrap<T extends CollectionItem>(
  render: (props: SelectProps<T>, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, SelectProps<T>>(render) as unknown as Select
}

export const Component = _bootstrap(function ({ children, placeholder, positioning, className, ...props }, ref) {
  return (
    <Root ref={ref} positioning={{ sameWidth: true, ...positioning }} unmountOnExit {...props}>
      <Control>
        <Trigger className={className}>
          <ValueText placeholder={placeholder} />
          <Indicator asChild>
            <LuChevronDown />
          </Indicator>
        </Trigger>
      </Control>
      <Portal>
        <Positioner>
          <Content>{children}</Content>
        </Positioner>
      </Portal>
      <HiddenSelect />
    </Root>
  )
})

Component.displayName = "Select"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Context = Context
Component.ItemContext = ItemContext
Component.Label = Label
Component.Control = Control
Component.Trigger = Trigger
Component.ValueText = ValueText
Component.ClearTrigger = ClearTrigger
Component.Indicator = Indicator
Component.HiddenSelect = HiddenSelect
Component.Positioner = Positioner
Component.List = List
Component.Content = Content
Component.ItemGroup = ItemGroup
Component.ItemGroupLabel = ItemGroupLabel
Component.Item = Item
Component.ItemText = ItemText
Component.ItemIndicator = ItemIndicator
