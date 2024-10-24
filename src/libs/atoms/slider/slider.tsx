import { Slider } from "@ark-ui/react"
import { createComponentTree, createCtx } from "../utils"
import { slider } from "./variants"

const { withRoot, withSlot } = createCtx(slider)

const Root = withRoot(Slider.Root)
const RootProvider = withRoot(Slider.RootProvider)
const Context = withSlot(Slider.Context)
const Control = withSlot(Slider.Control)
const HiddenInput = withSlot(Slider.HiddenInput)
const Label = withSlot(Slider.Label)
const Marker = withSlot(Slider.Marker)
const MarkerGroup = withSlot(Slider.MarkerGroup)
const Range = withSlot(Slider.Range)
const Thumb = withSlot(Slider.Thumb)
const Track = withSlot(Slider.Track)
const ValueText = withSlot(Slider.ValueText)

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  HiddenInput,
  Label,
  Marker,
  MarkerGroup,
  Range,
  Thumb,
  Track,
  ValueText,
})

Component.displayName = "Slider"
