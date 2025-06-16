"use client"

import { PinInput as BasePinInput } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const pinInput = tv({
  base: "",
})

const { withRoot, withSlot } = createComponentFactory(pinInput)

const Root = withRoot(BasePinInput.Root)
const RootProvider = withRoot(BasePinInput.RootProvider)
const Context = withSlot(BasePinInput.Context)
const Control = withSlot(BasePinInput.Control)
const HiddenInput = withSlot(BasePinInput.HiddenInput)
const Input = withSlot(BasePinInput.Input)
const Label = withSlot(BasePinInput.Label)

export interface PinInputProps extends ComposedTVProps<typeof pinInput> {}

export interface PinInput extends ComponentMetadata {
  (props: PinInputProps): React.ReactElement | null
}

export const PinInput = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  HiddenInput,
  Input,
  Label,
})

PinInput.displayName = "PinInput"
