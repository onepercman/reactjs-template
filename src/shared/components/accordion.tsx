"use client"

import { Accordion as BaseAccordion } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { tv } from "tailwind-variants"

export const accordion = tv({
  base: "",
  slots: {
    item: "flex flex-col",
    itemTrigger:
      "inline-flex w-full items-center justify-between gap-2 rounded",
    itemIndicator: ["transition-all", "data-[state=open]:rotate-180"],
    itemContent: [
      "overflow-hidden !duration-150",
      "data-[state=open]:animate-collapse",
      "data-[state=closed]:animate-collapse data-[state=closed]:direction-reverse",
    ],
  },
})

const { withRoot, withSlot } = createComponentFactory(accordion)

const Root = withRoot(BaseAccordion.Root, "base")
const RootProvider = withSlot(BaseAccordion.RootProvider, "base")
const Context = withSlot(BaseAccordion.Context)
const ItemContext = withSlot(BaseAccordion.ItemContext)
const Item = withSlot(BaseAccordion.Item, "item")
const ItemTrigger = withSlot(BaseAccordion.ItemTrigger, "itemTrigger")
const ItemContent = withSlot(BaseAccordion.ItemContent, "itemContent")
const ItemIndicator = withSlot(BaseAccordion.ItemIndicator, "itemIndicator")

export const Accordion = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  ItemContext,
  Item,
  ItemTrigger,
  ItemContent,
  ItemIndicator,
})

Accordion.displayName = "Accordion"
