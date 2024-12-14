"use client"

import { CollectionItem, Combobox, ComboboxRootProps } from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { combobox } from "./variants"

const { withRoot, withSlot } = createComponentFactory(combobox)

const Root = withRoot(Combobox.Root, "base")
const RootProvider = withRoot(Combobox.RootProvider, "base")
const Context = withSlot(Combobox.Context)
const ItemContext = withSlot(Combobox.ItemContext)
const Label = withSlot(Combobox.Label)
const Control = withSlot(Combobox.Control)
const Trigger = withSlot(Combobox.Trigger, "trigger")
const Input = withSlot(Combobox.Input, "input")
const ClearTrigger = withSlot(Combobox.ClearTrigger, "clearTrigger")
const Positioner = withSlot(Combobox.Positioner)
const List = withSlot(Combobox.List)
const Content = withSlot(Combobox.Content, "content")
const ItemGroup = withSlot(Combobox.ItemGroup, "itemGroup")
const ItemGroupLabel = withSlot(Combobox.ItemGroupLabel, "ItemGroupLabel")
const Item = withSlot(Combobox.Item, "item")
const ItemText = withSlot(Combobox.ItemText, "itemText")
const ItemIndicator = withSlot(Combobox.ItemIndicator, "itemIndicator")

export interface ComboboxProps<T extends CollectionItem>
  extends ComboboxRootProps<T>,
    ComposedTVProps<typeof combobox> {}

export interface Combobox extends ComponentMetadata {
  <T extends CollectionItem>(props: ComboboxProps<T>): React.ReactElement | null
}

function _bootstrap<T extends CollectionItem>(
  render: (
    props: ComboboxProps<T>,
    ref: React.ForwardedRef<React.ElementRef<Combobox>>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<React.ElementRef<Combobox>, ComboboxProps<T>>(
    render,
  ) as unknown as Combobox
}

export const CustomRoot = _bootstrap(function (
  { children, positioning, ...props },
  ref,
) {
  return (
    <Root
      ref={ref}
      unmountOnExit
      positioning={{ sameWidth: true, ...positioning }}
      {...props}
    >
      {children}
    </Root>
  )
})

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

export const Component = createComponentTree(CustomRoot, {
  Root: Root as Combobox,
  RootProvider,
  Context,
  ItemContext,
  Label,
  Control,
  Trigger,
  Input,
  ClearTrigger,
  Positioner,
  List,
  Content: CustomContent,
  ItemGroup,
  ItemGroupLabel,
  Item,
  ItemText,
  ItemIndicator,
})

Component.displayName = "Combobox"
