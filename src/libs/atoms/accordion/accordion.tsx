import { Accordion, AccordionRootProps } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils/component-ctx"
import { accordion } from "./variants"

const { withRoot, withSlot } = createComponentCtx(accordion)

const Root = withRoot(Accordion.Root, "base")
const RootProvider = withSlot(Accordion.RootProvider, "base")
const Context = withSlot(Accordion.Context)
const ItemContext = withSlot(Accordion.ItemContext)
const Item = withSlot(Accordion.Item, "item")
const ItemTrigger = withSlot(Accordion.ItemTrigger, "itemTrigger")
const ItemContent = withSlot(Accordion.ItemContent, "itemContent")
const ItemIndicator = withSlot(Accordion.ItemIndicator, "itemIndicator")

export interface Accordion extends ForwardedRefComponent {
  (props: AccordionRootProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Context: typeof Context
  ItemContext: typeof ItemContext
  Item: typeof Item
  ItemTrigger: typeof ItemTrigger
  ItemContent: typeof ItemContent
  ItemIndicator: typeof ItemIndicator
}

export const Component = Root as any as Accordion

Component.displayName = "Accordion"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Context = Context
Component.ItemContext = ItemContext
Component.Item = Item
Component.ItemTrigger = ItemTrigger
Component.ItemContent = ItemContent
Component.ItemIndicator = ItemIndicator
