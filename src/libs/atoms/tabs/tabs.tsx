import { Tabs, TabsRootProps } from "@ark-ui/react"
import React from "react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { tabs } from "./variants"

const { withRoot, withSlot } = createComponentCtx(tabs)

const Root = withRoot(Tabs.Root, "base")
const Content = withSlot(Tabs.Content, "content")
const Context = withSlot(Tabs.Context)
const Indicator = withSlot(Tabs.Indicator, "indicator")
const List = withSlot(Tabs.List, "list")
const RootProvider = withSlot(Tabs.RootProvider)
const Trigger = withSlot(Tabs.Trigger, "trigger")

const CustomList = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<typeof List>>(function (
  { children, ...props },
  ref,
) {
  return (
    <List ref={ref} {...props}>
      <Indicator />
      {children}
    </List>
  )
})

CustomList.displayName = "List"

export interface Tabs extends ForwardedRefComponent {
  (props: TabsRootProps): React.ReactElement | null
  Root: typeof Root
  Content: typeof Content
  Context: typeof Context
  Indicator: typeof Indicator
  List: typeof CustomList
  RootProvider: typeof RootProvider
  Trigger: typeof Trigger
}

export const Component = Root as any as Tabs

Component.displayName = "Tabs"

Component.Root = Root
Component.Content = Content
Component.Context = Context
Component.Indicator = Indicator
Component.List = CustomList
Component.RootProvider = RootProvider
Component.Trigger = Trigger
