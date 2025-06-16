"use client"

import { Progress as BaseProgress } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const progress = tv({
  base: "rounded-full border border-line p-1",
  slots: {
    track: "relative h-2 rounded-full",
    range:
      "absolute h-full rounded-full bg-gradient-to-r from-primary to-accent transition-transform",
  },
})

const { withRoot, withSlot } = createComponentFactory(progress)

const Root = withRoot(BaseProgress.Root, "base")
const RootProvider = withRoot(BaseProgress.RootProvider, "base")
const Circle = withSlot(BaseProgress.Circle)
const CircleRange = withSlot(BaseProgress.CircleRange)
const CircleTrack = withSlot(BaseProgress.CircleTrack)
const Context = withSlot(BaseProgress.Context)
const Label = withSlot(BaseProgress.Label)
const Range = withSlot(BaseProgress.Range, "range")
const Track = withSlot(BaseProgress.Track, "track")
const ValueText = withSlot(BaseProgress.ValueText)
const View = withSlot(BaseProgress.View)

export interface ProgressProps extends ComposedTVProps<typeof progress> {}

export interface Progress extends ComponentMetadata {
  (props: ProgressProps): React.ReactElement | null
}

export const Progress = createComponentTree(Root, {
  Root,
  RootProvider,
  Circle,
  CircleRange,
  CircleTrack,
  Context,
  Label,
  Range,
  Track,
  ValueText,
  View,
})

Progress.displayName = "Progress"
