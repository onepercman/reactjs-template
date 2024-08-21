import { ToggleGroup } from "@ark-ui/react"
import { createCtx, createNested } from "../utils"
import { toggleGroup } from "./variants"

const { withRoot, withSlot } = createCtx(toggleGroup)

const Root = withRoot(ToggleGroup.Root)
const RootProvider = withRoot(ToggleGroup.RootProvider)
const Context = withSlot(ToggleGroup.Context)
const Item = withSlot(ToggleGroup.Item)

export const Component = createNested(Root, {
  RootProvider,
  Context,
  Item,
})

Component.displayName = "ToggleGroup"
