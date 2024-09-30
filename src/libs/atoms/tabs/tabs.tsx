import { Tabs } from "@ark-ui/react"
import React from "react"
import { createCtx, createNested } from "../utils"
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
  HTMLElement,
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

export const Component = createNested(Root, {
  Root,
  Content,
  Context,
  Indicator,
  List: CustomList,
  RootProvider,
  Trigger,
})

Component.displayName = "Tabs"
