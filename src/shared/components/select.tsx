"use client"

import {
  Select as BaseSelect,
  CollectionItem,
  SelectRootProps,
} from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const select = tv({
  base: "",
  slots: {
    trigger: "data-[placeholder-shown]:text-secondary",
    valueText: "grow text-left",
    clearTrigger: "text-secondary",
    indicator: "text-secondary",
    content: [
      "flex w-full flex-col overflow-hidden rounded bg-component p-2 shadow-lg",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    itemGroup: "flex flex-col",
    itemGroupLabel: "w-full px-2 py-1 text-xs text-secondary",
    item: [
      "relative inline-flex cursor-pointer select-none items-start justify-between gap-2 rounded py-2 pl-3 pr-8 font-medium hover:bg-foreground/5",
      "data-[state=checked]:text-primary",
      "data-[disabled]:cursor-not-allowed data-[disabled]:text-muted",
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
    invalid: {
      true: {
        label: "text-error",
        trigger: "border-2 border-error bg-error/10 !text-error",
      },
    },
  },
  defaultVariants: { size: "md" },
})

const { withRoot, withSlot } = createComponentFactory(select)

const Root = withRoot(BaseSelect.Root, "base")
const RootProvider = withRoot(BaseSelect.RootProvider, "base")
const Context = withSlot(BaseSelect.Context)
const ItemContext = withSlot(BaseSelect.ItemContext)
const Label = withSlot(BaseSelect.Label)
const Control = withSlot(BaseSelect.Control)
const Trigger = withSlot(BaseSelect.Trigger, "trigger")
const ValueText = withSlot(BaseSelect.ValueText, "valueText")
const ClearTrigger = withSlot(BaseSelect.ClearTrigger, "clearTrigger")
const Indicator = withSlot(BaseSelect.Indicator, "indicator")
const HiddenSelect = withSlot(BaseSelect.HiddenSelect)
const Positioner = withSlot(BaseSelect.Positioner)
const List = withSlot(BaseSelect.List)
const Content = withSlot(BaseSelect.Content, "content")
const ItemGroup = withSlot(BaseSelect.ItemGroup, "itemGroup")
const ItemGroupLabel = withSlot(BaseSelect.ItemGroupLabel, "itemGroupLabel")
const Item = withSlot(BaseSelect.Item, "item")
const ItemText = withSlot(BaseSelect.ItemText, "itemText")
const ItemIndicator = withSlot(BaseSelect.ItemIndicator, "itemIndicator")

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
    ref: React.ForwardedRef<React.ElementRef<typeof Root>>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<React.ElementRef<typeof Root>, SelectProps<T>>(
    render,
  ) as unknown as Select
}

const CustomRoot = _bootstrap(function (
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

export const Select = createComponentTree(CustomRoot, {
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

Select.displayName = "Select"
