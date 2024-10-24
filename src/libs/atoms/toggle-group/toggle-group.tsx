import { ToggleGroup } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { toggleGroup } from "./variants"

const { withRoot, withSlot } = createComponentFactory(toggleGroup)

const Root = withRoot(ToggleGroup.Root)
const RootProvider = withRoot(ToggleGroup.RootProvider)
const Context = withSlot(ToggleGroup.Context)
const Item = withSlot(ToggleGroup.Item)

export const Component = createComponentTree(Root, {
  RootProvider,
  Context,
  Item,
})

Component.displayName = "ToggleGroup"
