import { RadioGroup } from "@ark-ui/react"
import React from "react"
import { createComponentCtx } from "../utils"
import { radioGroup } from "./variants"

const { withRoot, withSlot } = createComponentCtx(radioGroup)

export const Root = withRoot(RadioGroup.Root, "base")
export const RootProvider = withRoot(RadioGroup.RootProvider)
export const Context = withSlot(RadioGroup.Context)
export const Indicator = withSlot(RadioGroup.Indicator)
export const ItemPrimitive = withSlot(RadioGroup.Item, "item")
export const ItemContext = withSlot(RadioGroup.ItemContext)
export const ItemControl = withSlot(RadioGroup.ItemControl, "control")
export const ItemHiddenInput = withSlot(RadioGroup.ItemHiddenInput)
export const ItemText = withSlot(RadioGroup.ItemText, "itemText")
export const Label = withSlot(RadioGroup.Label)

export const Item = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ItemPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <Item ref={ref} {...props}>
      <ItemControl />
      <ItemText>{children}</ItemText>
      <ItemHiddenInput />
    </Item>
  )
})

Item.displayName = "Item"
