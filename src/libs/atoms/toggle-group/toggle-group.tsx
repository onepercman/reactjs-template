import { ToggleGroup } from "@ark-ui/react"
import { createComponentCtx, createRootComponent } from "../utils"
import { toggleGroup } from "./variants"

const { withRoot, withSlot } = createComponentCtx(toggleGroup)

const Root = withRoot(ToggleGroup.Root)
const RootProvider = withRoot(ToggleGroup.RootProvider)
const Context = withSlot(ToggleGroup.Context)
const Item = withSlot(ToggleGroup.Item)

export const Component = createRootComponent(Root, {
  RootProvider,
  Context,
  Item,
})

Component.displayName = "ToggleGroup"
