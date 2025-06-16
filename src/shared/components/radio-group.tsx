"use client"

import { RadioGroup as BaseRadioGroup } from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const radioGroup = tv({
  base: "flex flex-col gap-2",
  slots: {
    item: "inline-flex cursor-pointer items-center gap-2",
    itemText: "",
    control:
      "flex rounded-full border-2 border-line p-1 text-sm text-transparent duration-300 after:h-full after:w-full after:rounded-full after:bg-transparent after:content-[''] data-[hover]:border-primary data-[state=checked]:border-primary data-[state=checked]:after:bg-primary",
  },
  variants: {
    size: {
      xs: { label: "text-xs", itemText: "text-xs", control: "h-4 w-4" },
      sm: { label: "text-sm", itemText: "text-sm", control: "h-5 w-5" },
      md: { label: "text-md", itemText: "text-md", control: "h-6 w-6" },
      lg: { label: "text-lg", itemText: "text-lg", control: "h-7 w-7" },
    },
    invalid: {
      true: {
        label: "text-error",
        control:
          "data-[state=checked]:border-error data-[state=checked]:after:bg-error",
        itemText: "data-[state=checked]:text-error",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const { withRoot, withSlot } = createComponentFactory(radioGroup)

const Root = withRoot(BaseRadioGroup.Root, "base")
const RootProvider = withRoot(BaseRadioGroup.RootProvider)
const Context = withSlot(BaseRadioGroup.Context)
const Indicator = withSlot(BaseRadioGroup.Indicator)
const Item = withSlot(BaseRadioGroup.Item, "item")
const ItemContext = withSlot(BaseRadioGroup.ItemContext)
const ItemControl = withSlot(BaseRadioGroup.ItemControl, "control")
const ItemHiddenInput = withSlot(BaseRadioGroup.ItemHiddenInput)
const ItemText = withSlot(BaseRadioGroup.ItemText, "itemText")
const Label = withSlot(BaseRadioGroup.Label)

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

export interface RadioGroupProps extends ComposedTVProps<typeof radioGroup> {}

export interface RadioGroup extends ComponentMetadata {
  (props: RadioGroupProps): React.ReactElement | null
}

export const RadioGroup = createComponentTree(Root, {
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

RadioGroup.displayName = "RadioGroup"
