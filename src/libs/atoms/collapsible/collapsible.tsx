import { Collapsible } from "@ark-ui/react"
import { createComponentCtx, createRootComponent } from "../utils/component-ctx"
import { collapsible } from "./variants"

const { withRoot, withSlot } = createComponentCtx(collapsible)

const Root = withRoot(Collapsible.Root, "base")
const Content = withSlot(Collapsible.Content, "content")
const Context = withSlot(Collapsible.Context)
const RootProvider = withSlot(Collapsible.RootProvider)
const Trigger = withSlot(Collapsible.Trigger, "trigger")

export const Component = createRootComponent(Root, {
  Root,
  Content,
  Context,
  RootProvider,
  Trigger,
})

Component.displayName = "Collapsible"
