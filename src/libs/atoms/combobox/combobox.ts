import { Combobox } from "@ark-ui/react"
import { createComponentCtx } from "../utils"
import { combobox } from "./variants"

const { withRoot, withSlot } = createComponentCtx(combobox)

export const Root = withRoot(Combobox.Root, "base")
export const RootProvider = withSlot(Combobox.RootProvider)
export const ClearTrigger = withSlot(Combobox.ClearTrigger, "clear")
export const Content = withSlot(Combobox.Content, "list")
export const Context = withSlot(Combobox.Context)
export const Control = withSlot(Combobox.Control)
export const Input = withSlot(Combobox.Input)
export const Item = withSlot(Combobox.Item, "item")
export const ItemContext = withSlot(Combobox.ItemContext)
export const ItemGroup = withSlot(Combobox.ItemGroup, "group")
export const ItemGroupLabel = withSlot(Combobox.ItemGroupLabel, "groupLabel")
export const ItemIndicator = withSlot(Combobox.ItemIndicator, "itemIndicator")
export const ItemText = withSlot(Combobox.ItemText, "itemText")
export const Label = withSlot(Combobox.Label)
export const List = withSlot(Combobox.List)
export const Positioner = withSlot(Combobox.Positioner)
export const Trigger = withSlot(Combobox.Trigger, "trigger")

export { Combobox as Compact } from "./compact"
