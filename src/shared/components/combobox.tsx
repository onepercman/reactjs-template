"use client"

import {
  Combobox as BaseCombobox,
  CollectionItem,
  ComboboxRootProps,
} from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const combobox = tv({
  base: "",
  slots: {
    trigger: "text-secondary",
    input: "w-full",
    clearTrigger: "text-secondary",
    content: [
      "flex w-full flex-col overflow-hidden rounded bg-component p-2 shadow-lg",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    itemGroup: "flex flex-col",
    ItemGroupLabel: "w-full px-2 py-1 text-xs text-secondary",
    item: [
      "relative inline-flex cursor-pointer items-start justify-between gap-2 rounded py-2 pl-3 pr-8 font-medium data-[state=checked]:text-primary hover:bg-foreground/5",
      "data-[disabled]:text-muted",
    ],
    itemText: "grow",
    itemIndicator:
      "absolute right-2 top-0 h-full items-center text-xs text-primary data-[state=checked]:flex",
  },
  variants: {
    size: {
      xs: { item: "py-1 text-xs" },
      sm: { item: "py-1 text-sm" },
      md: { item: "text-base" },
      lg: { item: "text-lg" },
    },
  },
  defaultVariants: { size: "md" },
})

const { withRoot, withSlot } = createComponentFactory(combobox)

const Root = withRoot(BaseCombobox.Root, "base")
const RootProvider = withRoot(BaseCombobox.RootProvider, "base")
const Context = withSlot(BaseCombobox.Context)
const ItemContext = withSlot(BaseCombobox.ItemContext)
const Label = withSlot(BaseCombobox.Label)
const Control = withSlot(BaseCombobox.Control)
const Trigger = withSlot(BaseCombobox.Trigger, "trigger")
const Input = withSlot(BaseCombobox.Input, "input")
const ClearTrigger = withSlot(BaseCombobox.ClearTrigger, "clearTrigger")
const Positioner = withSlot(BaseCombobox.Positioner)
const List = withSlot(BaseCombobox.List)
const Content = withSlot(BaseCombobox.Content, "content")
const ItemGroup = withSlot(BaseCombobox.ItemGroup, "itemGroup")
const ItemGroupLabel = withSlot(BaseCombobox.ItemGroupLabel, "ItemGroupLabel")
const Item = withSlot(BaseCombobox.Item, "item")
const ItemText = withSlot(BaseCombobox.ItemText, "itemText")
const ItemIndicator = withSlot(BaseCombobox.ItemIndicator, "itemIndicator")

export interface ComboboxProps<T extends CollectionItem>
  extends ComboboxRootProps<T>,
    ComposedTVProps<typeof combobox> {}

export interface Combobox extends ComponentMetadata {
  <T extends CollectionItem>(props: ComboboxProps<T>): React.ReactElement | null
}

function _bootstrap<T extends CollectionItem>(
  render: (
    props: ComboboxProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, ComboboxProps<T>>(
    render,
  ) as unknown as Combobox
}

const CustomRoot = _bootstrap(function (
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

export const Combobox = createComponentTree(CustomRoot, {
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

Combobox.displayName = "Combobox"
