"use client"

import { SignaturePad as BaseSignaturePad } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const signaturePad = tv({
  base: "",
})

const { withRoot, withSlot } = createComponentFactory(signaturePad)

const Root = withRoot(BaseSignaturePad.Root)
const RootProvider = withRoot(BaseSignaturePad.RootProvider)
const ClearTrigger = withSlot(BaseSignaturePad.ClearTrigger)
const Context = withSlot(BaseSignaturePad.Context)
const Control = withSlot(BaseSignaturePad.Control)
const Guide = withSlot(BaseSignaturePad.Guide)
const HiddenInput = withSlot(BaseSignaturePad.HiddenInput)
const Label = withSlot(BaseSignaturePad.Label)
const Segment = withSlot(BaseSignaturePad.Segment)

export interface SignaturePadProps
  extends ComposedTVProps<typeof signaturePad> {}

export interface SignaturePad extends ComponentMetadata {
  (props: SignaturePadProps): React.ReactElement | null
}

export const SignaturePad = createComponentTree(Root, {
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

SignaturePad.displayName = "SignaturePad"
