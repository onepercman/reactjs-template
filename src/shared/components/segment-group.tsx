"use client"

import { SegmentGroup as BaseSegmentGroup } from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const segmentGroup = tv({
  base: "relative inline-flex items-center gap-2",
  slots: {
    item: "relative cursor-pointer select-none text-secondary transition-colors data-[state=checked]:text-primary data-[state=checked]:[text-shadow:_0px_0px_10px_rgba(var(--tw-schemes-primary),0.50)] hover:text-foreground",
    indicator: "",
  },
  variants: {
    size: {
      sm: {
        item: "px-2 py-1 text-sm",
      },
      md: {
        item: "px-4 py-2 text-base",
      },
      lg: {
        item: "px-3 py-2 text-base",
      },
    },
    variant: {
      solid: {
        base: "rounded bg-line p-1",
        indicator:
          "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded bg-default",
      },
      underlined: {
        base: "",
        indicator:
          "absolute bottom-0 left-[var(--left)] h-1 w-[var(--width)] rounded bg-foreground",
      },
      bordered: {
        base: "rounded border border-line p-1",
        indicator:
          "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded bg-default",
      },
      light: {
        base: "",
        indicator:
          "absolute bottom-0 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded bg-default",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
})

const { withRoot, withSlot } = createComponentFactory(segmentGroup)

const Root = withRoot(BaseSegmentGroup.Root, "base")
const RootProvider = withRoot(BaseSegmentGroup.RootProvider, "base")
const Context = withSlot(BaseSegmentGroup.Context)
const Indicator = withSlot(BaseSegmentGroup.Indicator, "indicator")
const Item = withSlot(BaseSegmentGroup.Item, "item")
const ItemContext = withSlot(BaseSegmentGroup.ItemContext)
const ItemControl = withSlot(BaseSegmentGroup.ItemControl)
const ItemHiddenInput = withSlot(BaseSegmentGroup.ItemHiddenInput)
const ItemText = withSlot(BaseSegmentGroup.ItemText)
const Label = withSlot(BaseSegmentGroup.Label)

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

export interface SegmentGroupProps
  extends ComposedTVProps<typeof segmentGroup> {}

export interface SegmentGroup extends ComponentMetadata {
  (props: SegmentGroupProps): React.ReactElement | null
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

const CustomRoot = _bootstrap(function ({ children, ...props }, ref) {
  return (
    <Root ref={ref} {...props}>
      <Indicator />
      {children}
    </Root>
  )
})

export const SegmentGroup = createComponentTree(CustomRoot, {
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

SegmentGroup.displayName = "SegmentGroup"
