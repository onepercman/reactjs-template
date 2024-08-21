import { Collapsible } from "@ark-ui/react"
import { createCtx, createNested } from "../utils"
import { collapsible } from "./variants"

const { withRoot, withSlot } = createCtx(collapsible)

const Root = withRoot(Collapsible.Root, "base")
const Content = withSlot(Collapsible.Content, "content")
const Context = withSlot(Collapsible.Context)
const RootProvider = withSlot(Collapsible.RootProvider)
const Trigger = withSlot(Collapsible.Trigger, "trigger")

export const Component = createNested(Root, {
  Root,
  Content,
  Context,
  RootProvider,
  Trigger,
})

Component.displayName = "Collapsible"
