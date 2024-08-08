import { Clipboard } from "@ark-ui/react"
import { createComponentCtx, createRootComponent } from "../utils"
import { clipboard } from "./variants"

const { withRoot, withSlot } = createComponentCtx(clipboard)

const Root = withRoot(Clipboard.Root)
const RootProvider = withRoot(Clipboard.RootProvider)
const Context = withSlot(Clipboard.Context)
const Control = withSlot(Clipboard.Control)
const Indicator = withSlot(Clipboard.Indicator)
const Input = withSlot(Clipboard.Input)
const Label = withSlot(Clipboard.Label)
const Trigger = withSlot(Clipboard.Trigger)

export const Component = createRootComponent(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  Indicator,
  Input,
  Label,
  Trigger,
})

Component.displayName = "Clipboard"
