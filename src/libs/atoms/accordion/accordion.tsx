import { Accordion } from "@ark-ui/react"
import { createComponentCtx } from "../utils/component-ctx"
import { accordion } from "./variants"

const { withRoot, withSlot } = createComponentCtx(accordion)

export const Root = withRoot(Accordion.Root, "base")
export const RootProvider = withSlot(Accordion.RootProvider, "base")
export const Context = withSlot(Accordion.Context)
export const ItemContext = withSlot(Accordion.ItemContext)
export const Item = withSlot(Accordion.Item, "item")
export const ItemTrigger = withSlot(Accordion.ItemTrigger, "itemTrigger")
export const ItemContent = withSlot(Accordion.ItemContent, "itemContent")
export const ItemIndicator = withSlot(Accordion.ItemIndicator, "itemIndicator")
