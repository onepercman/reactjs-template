import { PinInput } from "@ark-ui/react"
import { createCtx, createNested } from "../utils"
import { pinInput } from "./variants"

const { withRoot, withSlot } = createCtx(pinInput)

const Root = withRoot(PinInput.Root)
const RootProvider = withRoot(PinInput.RootProvider)
const Context = withSlot(PinInput.Context)
const Control = withSlot(PinInput.Control)
const HiddenInput = withSlot(PinInput.HiddenInput)
const Input = withSlot(PinInput.Input)
const Label = withSlot(PinInput.Label)

export const Component = createNested(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  HiddenInput,
  Input,
  Label,
})

Component.displayName = "PinInput"
