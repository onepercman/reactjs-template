import { CollectionItem, Portal, Select, SelectRootProps } from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { select } from "./variants"

const { withRoot, withSlot } = createComponentFactory(select)

const Root = withRoot(Select.Root, "base")
const RootProvider = withRoot(Select.RootProvider, "base")
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
const ItemGroupLabel = withSlot(Select.ItemGroupLabel, "itemGroupLabel")
const Item = withSlot(Select.Item, "item")
const ItemText = withSlot(Select.ItemText, "itemText")
const ItemIndicator = withSlot(Select.ItemIndicator, "itemIndicator")

export interface SelectProps<T extends CollectionItem>
  extends SelectRootProps<T>,
    ComposedTVProps<typeof select> {}

export interface Select extends ComponentMetadata {
  <T extends CollectionItem>(
    props: SelectProps<T> & React.RefAttributes<Select>,
  ): JSX.Element
}

function _bootstrap<T extends CollectionItem>(
  render: (
    props: SelectProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, SelectProps<T>>(
    render,
  ) as unknown as Select
}

export const CustomRoot = _bootstrap(function (
  { children, positioning, ...props },
  ref,
) {
  return (
    <Root
      ref={ref}
      positioning={{ sameWidth: true, ...positioning }}
      unmountOnExit
      {...props}
    >
      {children}
      <HiddenSelect />
    </Root>
  )
})

const CustomContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Content>
>(function ({ children, ...props }, ref) {
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

export const Component = createComponentTree(CustomRoot, {
  Root: Root as Select,
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
  Content: CustomContent,
  ItemGroup,
  ItemGroupLabel,
  Item,
  ItemText,
  ItemIndicator,
})

Component.displayName = "Select"
