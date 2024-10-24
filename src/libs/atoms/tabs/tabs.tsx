import { Tabs } from "@ark-ui/react"
import React from "react"
import { createComponentTree, createCtx } from "../utils"
import { tabs } from "./variants"

const { withRoot, withSlot } = createCtx(tabs)

const Root = withRoot(Tabs.Root, "base")
const Content = withSlot(Tabs.Content, "content")
const Context = withSlot(Tabs.Context)
const Indicator = withSlot(Tabs.Indicator, "indicator")
const List = withSlot(Tabs.List, "list")
const RootProvider = withSlot(Tabs.RootProvider)
const Trigger = withSlot(Tabs.Trigger, "trigger")

const CustomList = React.forwardRef<
  React.ElementRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List>
>(function ({ children, ...props }, ref) {
  return (
    <List ref={ref} {...props}>
      <Indicator />
      {children}
    </List>
  )
})

CustomList.displayName = "List"

export const Component = createComponentTree(Root, {
  Root,
  Content,
  Context,
  Indicator,
  List: CustomList,
  RootProvider,
  Trigger,
})

Component.displayName = "Tabs"
