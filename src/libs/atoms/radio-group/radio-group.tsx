import { RadioGroup, RadioGroupRootProps } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { radioGroup } from "./variants"

const { withRoot, withSlot } = createComponentCtx(radioGroup)

const Root = withRoot(RadioGroup.Root, "base")
const RootProvider = withRoot(RadioGroup.RootProvider)
const Context = withSlot(RadioGroup.Context)
const Indicator = withSlot(RadioGroup.Indicator)
const Item = withSlot(RadioGroup.Item, "item")
const ItemContext = withSlot(RadioGroup.ItemContext)
const ItemControl = withSlot(RadioGroup.ItemControl, "control")
const ItemHiddenInput = withSlot(RadioGroup.ItemHiddenInput)
const ItemText = withSlot(RadioGroup.ItemText, "itemText")
const Label = withSlot(RadioGroup.Label)

const CustomItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Item>>(function (
  { children, ...props },
  ref,
) {
  return (
    <Item ref={ref} {...props}>
      <ItemControl />
      <ItemText>{children}</ItemText>
      <ItemHiddenInput />
    </Item>
  )
})

Item.displayName = "Item"

export interface RadioGroup extends ForwardedRefComponent {
  (props: RadioGroupRootProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Context: typeof Context
  Indicator: typeof Indicator
  Item: typeof CustomItem
  ItemContext: typeof ItemContext
  ItemControl: typeof ItemControl
  ItemHiddenInput: typeof ItemHiddenInput
  ItemText: typeof ItemText
  Label: typeof Label
}

export const Component = Root as any as RadioGroup

Component.Root = Root
Component.RootProvider = RootProvider
Component.Context = Context
Component.Indicator = Indicator
Component.Item = CustomItem
Component.ItemContext = ItemContext
Component.ItemControl = ItemControl
Component.ItemHiddenInput = ItemHiddenInput
Component.ItemText = ItemText
Component.Label = Label
