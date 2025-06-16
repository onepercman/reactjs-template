"use client"

import { Clipboard as BaseClipboard } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { tv } from "tailwind-variants"

export const clipboard = tv({
  base: "",
})

const { withRoot, withSlot } = createComponentFactory(clipboard)

const Root = withRoot(BaseClipboard.Root)
const RootProvider = withRoot(BaseClipboard.RootProvider)
const Context = withSlot(BaseClipboard.Context)
const Control = withSlot(BaseClipboard.Control)
const Indicator = withSlot(BaseClipboard.Indicator)
const Input = withSlot(BaseClipboard.Input)
const Label = withSlot(BaseClipboard.Label)
const Trigger = withSlot(BaseClipboard.Trigger)

export const Clipboard = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  Indicator,
  Input,
  Label,
  Trigger,
})

Clipboard.displayName = "Clipboard"
