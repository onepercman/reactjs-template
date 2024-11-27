"use client"

import { Collapsible } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { collapsible } from "./variants"

const { withRoot, withSlot } = createComponentFactory(collapsible)

const Root = withRoot(Collapsible.Root, "base")
const Content = withSlot(Collapsible.Content, "content")
const Context = withSlot(Collapsible.Context)
const RootProvider = withSlot(Collapsible.RootProvider)
const Trigger = withSlot(Collapsible.Trigger, "trigger")

export const Component = createComponentTree(Root, {
  Root,
  Content,
  Context,
  RootProvider,
  Trigger,
})

Component.displayName = "Collapsible"
