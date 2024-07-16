import { Tabs } from "@ark-ui/react"
import { createComponentCtx } from "../utils"
import { tabs } from "./variants"

const { withRoot, withSlot } = createComponentCtx(tabs)

export const Root = withRoot(Tabs.Root, "base")
export const Content = withSlot(Tabs.Content, "content")
export const Context = withSlot(Tabs.Context)
export const Indicator = withSlot(Tabs.Indicator, "indicator")
export const List = withSlot(Tabs.List, "list")
export const RootProvider = withSlot(Tabs.RootProvider)
export const Trigger = withSlot(Tabs.Trigger, "trigger")

export { Tabs as Compact } from "./compact"
