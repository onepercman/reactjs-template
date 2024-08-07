import { Collapsible } from "@ark-ui/react"
import { createComponentCtx } from "../utils/component-ctx"
import { collapsible } from "./variants"

const { withRoot, withSlot } = createComponentCtx(collapsible)

export const Root = withRoot(Collapsible.Root, "base")
export const Content = withSlot(Collapsible.Content, "content")
export const Context = withSlot(Collapsible.Context)
export const RootProvider = withSlot(Collapsible.RootProvider)
export const Trigger = withSlot(Collapsible.Trigger, "trigger")
