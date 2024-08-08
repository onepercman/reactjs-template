import { Portal, Select, SelectRootProps } from "@ark-ui/react"
import { CollectionItem } from "node_modules/@ark-ui/react/dist/types"
import React from "react"
import { LuChevronDown } from "react-icons/lu"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { createComponentCtx, createRootComponent } from "../utils"
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
}

function _bootstrap<T extends CollectionItem>(
  render: (props: SelectProps<T>, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, SelectProps<T>>(render) as unknown as Select
}

export const CustomRoot = _bootstrap(function ({ children, placeholder, positioning, className, ...props }, ref) {
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

export const Component = createRootComponent(CustomRoot, {
  Root,
  RootProvider,
  Context,
  ItemContext,
  Label,
  Control,
  Trigger,
  ValueText,
  ClearTrigger,
  Indicator,
  HiddenSelect,
  Positioner,
  List,
  Content,
  ItemGroup,
  ItemGroupLabel,
  Item,
  ItemText,
  ItemIndicator,
})

Component.displayName = "Select"
