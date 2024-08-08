import { Accordion, AccordionRootProps } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils/component-ctx"
import { accordion } from "./variants"

const { withRoot, withSlot } = createComponentCtx(accordion)

const RootPrimitive = withRoot(Accordion.Root, "base")
const RootProvider = withSlot(Accordion.RootProvider, "base")
const Context = withSlot(Accordion.Context)
const ItemContext = withSlot(Accordion.ItemContext)
const Item = withSlot(Accordion.Item, "item")
const ItemTrigger = withSlot(Accordion.ItemTrigger, "itemTrigger")
const ItemContent = withSlot(Accordion.ItemContent, "itemContent")
const ItemIndicator = withSlot(Accordion.ItemIndicator, "itemIndicator")

export interface Accordion extends ForwardedRefComponent {
  (props: AccordionRootProps): React.ReactElement | null
  RootPrimitive: typeof RootPrimitive
  RootProvider: typeof RootProvider
  Context: typeof Context
  ItemContext: typeof ItemContext
  Item: typeof Item
  ItemTrigger: typeof ItemTrigger
  ItemContent: typeof ItemContent
  ItemIndicator: typeof ItemIndicator
}

function _bootstrap(
  render: (props: AccordionRootProps, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, AccordionRootProps>(render) as unknown as Accordion
}

export const Component = _bootstrap(function ({ ...props }, ref) {
  return <RootPrimitive ref={ref} {...props} />
})

Component.displayName = "Accordion"

Component.RootPrimitive = RootPrimitive
Component.RootProvider = RootProvider
Component.Context = Context
Component.ItemContext = ItemContext
Component.Item = Item
Component.ItemTrigger = ItemTrigger
Component.ItemContent = ItemContent
Component.ItemIndicator = ItemIndicator
