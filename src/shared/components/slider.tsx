"use client"

import { Slider as BaseSlider } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const slider = tv({
  base: "flex flex-col gap-1",
  slots: {
    label: "inline-flex justify-between gap-2 text-xs text-secondary",
    valueText: "",
    control: "inline-flex cursor-pointer items-center gap-2",
    track: "relative grow overflow-hidden rounded bg-default",
    range: "absolute h-full bg-primary",
    thumb: "-top-1/2 rounded-full bg-foreground",
    marker: "",
  },
  variants: {
    size: {
      sm: {
        valueText: "text-sm",
        track: "h-1",
        thumb: "h-2 w-2",
      },
      md: {
        valueText: "text-base",
        track: "h-2",
        thumb: "h-4 w-4",
      },
      lg: {
        valueText: "text-base",
        track: "h-3",
        thumb: "h-6 w-6",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
})

const { withRoot, withSlot } = createComponentFactory(slider)

const Root = withRoot(BaseSlider.Root)
const RootProvider = withRoot(BaseSlider.RootProvider)
const Context = withSlot(BaseSlider.Context)
const Control = withSlot(BaseSlider.Control)
const HiddenInput = withSlot(BaseSlider.HiddenInput)
const Label = withSlot(BaseSlider.Label)
const Marker = withSlot(BaseSlider.Marker)
const MarkerGroup = withSlot(BaseSlider.MarkerGroup)
const Range = withSlot(BaseSlider.Range)
const Thumb = withSlot(BaseSlider.Thumb)
const Track = withSlot(BaseSlider.Track)
const ValueText = withSlot(BaseSlider.ValueText)

export interface SliderProps extends ComposedTVProps<typeof slider> {}

export interface Slider extends ComponentMetadata {
  (props: SliderProps): React.ReactElement | null
}

export const Slider = createComponentTree(Root, {
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

Slider.displayName = "Slider"
