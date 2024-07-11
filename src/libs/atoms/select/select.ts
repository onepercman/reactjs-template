import { Select } from "@ark-ui/react"
import { createComponentCtx } from "../utils"
import { select } from "../variants"

const { withRoot, withSlot } = createComponentCtx(select)

export const Root = withRoot(Select.Root, "base")
export const ClearTrigger = withSlot(Select.ClearTrigger, "clear")
export const Content = withSlot(Select.Content, "list")
export const Context = withSlot(Select.Context)
export const Control = withSlot(Select.Control)
export const HiddenSelect = withSlot(Select.HiddenSelect)
export const Indicator = withSlot(Select.Indicator)
export const Item = withSlot(Select.Item, "item")
export const ItemContext = withSlot(Select.ItemContext)
export const ItemGroup = withSlot(Select.ItemGroup, "group")
export const ItemGroupLabel = withSlot(Select.ItemGroupLabel, "groupLabel")
export const ItemIndicator = withSlot(Select.ItemIndicator, "itemIndicator")
export const ItemText = withSlot(Select.ItemText, "itemText")
export const Label = withSlot(Select.Label)
export const List = withSlot(Select.List)
export const Positioner = withSlot(Select.Positioner)
export const RootProvider = withSlot(Select.RootProvider)
export const Trigger = withSlot(Select.Trigger, "trigger")
export const ValueText = withSlot(Select.ValueText)

export { Select as Compact } from "./compact-select"
