"use client"

import { ColorPicker as BaseColorPicker } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { tv } from "tailwind-variants"

export const colorPicker = tv({
  base: "",
})

const { withRoot, withSlot } = createComponentFactory(colorPicker)

const Root = withRoot(BaseColorPicker.Root)
const RootProvider = withRoot(BaseColorPicker.RootProvider)
const Area = withSlot(BaseColorPicker.Area)
const AreaBackground = withSlot(BaseColorPicker.AreaBackground)
const AreaThumb = withSlot(BaseColorPicker.AreaThumb)
const ChannelInput = withSlot(BaseColorPicker.ChannelInput)
const ChannelSlider = withSlot(BaseColorPicker.ChannelSlider)
const ChannelSliderLabel = withSlot(BaseColorPicker.ChannelSliderLabel)
const ChannelSliderThumb = withSlot(BaseColorPicker.ChannelSliderThumb)
const ChannelSliderTrack = withSlot(BaseColorPicker.ChannelSliderTrack)
const ChannelSliderValueText = withSlot(BaseColorPicker.ChannelSliderValueText)
const Content = withSlot(BaseColorPicker.Content)
const Context = withSlot(BaseColorPicker.Context)
const Control = withSlot(BaseColorPicker.Control)
const EyeDropperTrigger = withSlot(BaseColorPicker.EyeDropperTrigger)
const FormatSelect = withSlot(BaseColorPicker.FormatSelect)
const FormatTrigger = withSlot(BaseColorPicker.FormatTrigger)
const HiddenInput = withSlot(BaseColorPicker.HiddenInput)
const Label = withSlot(BaseColorPicker.Label)
const Positioner = withSlot(BaseColorPicker.Positioner)
const Swatch = withSlot(BaseColorPicker.Swatch)
const SwatchGroup = withSlot(BaseColorPicker.SwatchGroup)
const SwatchIndicator = withSlot(BaseColorPicker.SwatchIndicator)
const SwatchTrigger = withSlot(BaseColorPicker.SwatchTrigger)
const TransparencyGrid = withSlot(BaseColorPicker.TransparencyGrid)
const Trigger = withSlot(BaseColorPicker.Trigger)
const ValueSwatch = withSlot(BaseColorPicker.ValueSwatch)
const ValueText = withSlot(BaseColorPicker.ValueText)
const View = withSlot(BaseColorPicker.View)

export const ColorPicker = createComponentTree(Root, {
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

ColorPicker.displayName = "ColorPicker"
