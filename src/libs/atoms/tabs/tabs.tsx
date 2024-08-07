import { Tabs } from "@ark-ui/react"
import React from "react"
import { createComponentCtx } from "../utils"
import { tabs } from "./variants"

const { withRoot, withSlot } = createComponentCtx(tabs)

export const Root = withRoot(Tabs.Root, "base")
export const Content = withSlot(Tabs.Content, "content")
export const Context = withSlot(Tabs.Context)
export const Indicator = withSlot(Tabs.Indicator, "indicator")
export const ListPrimitive = withSlot(Tabs.List, "list")
export const RootProvider = withSlot(Tabs.RootProvider)
export const Trigger = withSlot(Tabs.Trigger, "trigger")

export const List = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof ListPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <ListPrimitive ref={ref} {...props}>
      <Indicator />
      {children}
    </ListPrimitive>
  )
})

List.displayName = "List"
