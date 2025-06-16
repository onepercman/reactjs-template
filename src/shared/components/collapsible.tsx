"use client"

import { Collapsible as BaseCollapsible } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { tv } from "tailwind-variants"

export const collapsible = tv({
  base: "flex flex-col",
  slots: {
    trigger: "inline-flex w-full items-center justify-between gap-2 rounded",
    content: [
      "overflow-hidden !duration-150",
      "data-[state=open]:animate-collapse",
      "data-[state=closed]:animate-collapse data-[state=closed]:direction-reverse",
    ],
  },
})

const { withRoot, withSlot } = createComponentFactory(collapsible)

const Root = withRoot(BaseCollapsible.Root, "base")
const Content = withSlot(BaseCollapsible.Content, "content")
const Context = withSlot(BaseCollapsible.Context)
const RootProvider = withSlot(BaseCollapsible.RootProvider)
const Trigger = withSlot(BaseCollapsible.Trigger, "trigger")

export const Collapsible = createComponentTree(Root, {
  Root,
  Content,
  Context,
  RootProvider,
  Trigger,
})

Collapsible.displayName = "Collapsible"
