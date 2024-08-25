import { NumberInput } from "@ark-ui/react"
import { createCtx, createNested } from "../utils"
import { numberInput } from "./variants"

const { withRoot, withSlot } = createCtx(numberInput)

const Root = withRoot(NumberInput.Root)
const RootProvider = withRoot(NumberInput.RootProvider)
const Context = withSlot(NumberInput.Context)
const Control = withSlot(NumberInput.Control)
const DecrementTrigger = withSlot(NumberInput.DecrementTrigger)
const IncrementTrigger = withSlot(NumberInput.IncrementTrigger)
const Input = withSlot(NumberInput.Input)
const Label = withSlot(NumberInput.Label)
const Scrubber = withSlot(NumberInput.Scrubber)
const ValueText = withSlot(NumberInput.ValueText)

export const Component = createNested(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input,
  Label,
  Scrubber,
  ValueText,
})
