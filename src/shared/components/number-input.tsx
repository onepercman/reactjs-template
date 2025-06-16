"use client"

import { NumberInput as BaseNumberInput } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const numberInput = tv({
  base: "",
  slots: {
    input: "",
  },
})

const { withRoot, withSlot } = createComponentFactory(numberInput)

const Root = withRoot(BaseNumberInput.Root)
const RootProvider = withRoot(BaseNumberInput.RootProvider)
const Context = withSlot(BaseNumberInput.Context)
const Control = withSlot(BaseNumberInput.Control)
const DecrementTrigger = withSlot(BaseNumberInput.DecrementTrigger)
const IncrementTrigger = withSlot(BaseNumberInput.IncrementTrigger)
const Input = withSlot(BaseNumberInput.Input)
const Label = withSlot(BaseNumberInput.Label)
const Scrubber = withSlot(BaseNumberInput.Scrubber)
const ValueText = withSlot(BaseNumberInput.ValueText)

export interface NumberInputProps extends ComposedTVProps<typeof numberInput> {}

export interface NumberInput extends ComponentMetadata {
  (props: NumberInputProps): React.ReactElement | null
}

export const NumberInput = createComponentTree(Root, {
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

NumberInput.displayName = "NumberInput"
