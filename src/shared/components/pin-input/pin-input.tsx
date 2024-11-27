"use client"

import { PinInput } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { pinInput } from "./variants"

const { withRoot, withSlot } = createComponentFactory(pinInput)

const Root = withRoot(PinInput.Root)
const RootProvider = withRoot(PinInput.RootProvider)
const Context = withSlot(PinInput.Context)
const Control = withSlot(PinInput.Control)
const HiddenInput = withSlot(PinInput.HiddenInput)
const Input = withSlot(PinInput.Input)
const Label = withSlot(PinInput.Label)

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  HiddenInput,
  Input,
  Label,
})

Component.displayName = "PinInput"
