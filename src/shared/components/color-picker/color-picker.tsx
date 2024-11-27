"use client"

import { ColorPicker } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { colorPicker } from "./variants"

const { withRoot, withSlot } = createComponentFactory(colorPicker)

const Root = withRoot(ColorPicker.Root)
const RootProvider = withRoot(ColorPicker.RootProvider)
const Area = withSlot(ColorPicker.Area)
const AreaBackground = withSlot(ColorPicker.AreaBackground)
const AreaThumb = withSlot(ColorPicker.AreaThumb)
const ChannelInput = withSlot(ColorPicker.ChannelInput)
const ChannelSlider = withSlot(ColorPicker.ChannelSlider)
const ChannelSliderLabel = withSlot(ColorPicker.ChannelSliderLabel)
const ChannelSliderThumb = withSlot(ColorPicker.ChannelSliderThumb)
const ChannelSliderTrack = withSlot(ColorPicker.ChannelSliderTrack)
const ChannelSliderValueText = withSlot(ColorPicker.ChannelSliderValueText)
const Content = withSlot(ColorPicker.Content)
const Context = withSlot(ColorPicker.Context)
const Control = withSlot(ColorPicker.Control)
const EyeDropperTrigger = withSlot(ColorPicker.EyeDropperTrigger)
const FormatSelect = withSlot(ColorPicker.FormatSelect)
const FormatTrigger = withSlot(ColorPicker.FormatTrigger)
const HiddenInput = withSlot(ColorPicker.HiddenInput)
const Label = withSlot(ColorPicker.Label)
const Positioner = withSlot(ColorPicker.Positioner)
const Swatch = withSlot(ColorPicker.Swatch)
const SwatchGroup = withSlot(ColorPicker.SwatchGroup)
const SwatchIndicator = withSlot(ColorPicker.SwatchIndicator)
const SwatchTrigger = withSlot(ColorPicker.SwatchTrigger)
const TransparencyGrid = withSlot(ColorPicker.TransparencyGrid)
const Trigger = withSlot(ColorPicker.Trigger)
const ValueSwatch = withSlot(ColorPicker.ValueSwatch)
const ValueText = withSlot(ColorPicker.ValueText)
const View = withSlot(ColorPicker.View)

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Area,
  AreaBackground,
  AreaThumb,
  ChannelInput,
  ChannelSlider,
  ChannelSliderLabel,
  ChannelSliderThumb,
  ChannelSliderTrack,
  ChannelSliderValueText,
  Content,
  Context,
  Control,
  EyeDropperTrigger,
  FormatSelect,
  FormatTrigger,
  HiddenInput,
  Label,
  Positioner,
  Swatch,
  SwatchGroup,
  SwatchIndicator,
  SwatchTrigger,
  TransparencyGrid,
  Trigger,
  ValueSwatch,
  ValueText,
  View,
})

Component.displayName = "ColorPicker"
