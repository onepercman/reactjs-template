import { SignaturePad } from "@ark-ui/react"
import { createComponentCtx, createRootComponent } from "../utils"
import { signaturePad } from "./variants"

const { withRoot, withSlot } = createComponentCtx(signaturePad)

const Root = withRoot(SignaturePad.Root)
const RootProvider = withRoot(SignaturePad.RootProvider)
const ClearTrigger = withSlot(SignaturePad.ClearTrigger)
const Context = withSlot(SignaturePad.Context)
const Control = withSlot(SignaturePad.Control)
const Guide = withSlot(SignaturePad.Guide)
const HiddenInput = withSlot(SignaturePad.HiddenInput)
const Label = withSlot(SignaturePad.Label)
const Segment = withSlot(SignaturePad.Segment)

export const Component = createRootComponent(Root, {
  Root,
  RootProvider,
  ClearTrigger,
  Context,
  Control,
  Guide,
  HiddenInput,
  Label,
  Segment,
})

Component.displayName = "SignaturePad"
