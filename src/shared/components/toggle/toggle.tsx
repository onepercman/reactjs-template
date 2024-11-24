import { Toggle } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { toggle } from "./variants"

const { withRoot, withSlot } = createComponentFactory(toggle)

const Root = withRoot(Toggle.Root, "base")
const Context = withSlot(Toggle.Context)
const Indicator = withSlot(Toggle.Indicator)

export const Component = createComponentTree(Root, {
  Root,
  Context,
  Indicator,
})

Component.displayName = "Toggle"
