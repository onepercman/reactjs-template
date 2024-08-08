import { Collapsible, CollapsibleRootProps } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils/component-ctx"
import { collapsible } from "./variants"

const { withRoot, withSlot } = createComponentCtx(collapsible)

const Root = withRoot(Collapsible.Root, "base")
const Content = withSlot(Collapsible.Content, "content")
const Context = withSlot(Collapsible.Context)
const RootProvider = withSlot(Collapsible.RootProvider)
const Trigger = withSlot(Collapsible.Trigger, "trigger")

export interface Checkbox extends ForwardedRefComponent {
  (props: CollapsibleRootProps): React.ReactElement | null
  Root: typeof Root
  Content: typeof Content
  Context: typeof Context
  RootProvider: typeof RootProvider
  Trigger: typeof Trigger
}

export const Component = Root as any as Checkbox

Component.Root = Root
Component.Content = Content
Component.Context = Context
Component.RootProvider = RootProvider
Component.Trigger = Trigger
