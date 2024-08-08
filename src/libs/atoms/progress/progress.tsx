import { Progress } from "@ark-ui/react"
import { createComponentCtx, createRootComponent } from "../utils"
import { progress } from "./variants"

const { withRoot, withSlot } = createComponentCtx(progress)

const Root = withRoot(Progress.Root, "base")
const RootProvider = withRoot(Progress.RootProvider, "base")
const Circle = withSlot(Progress.Circle)
const CircleRange = withSlot(Progress.CircleRange)
const CircleTrack = withSlot(Progress.CircleTrack)
const Context = withSlot(Progress.Context)
const Label = withSlot(Progress.Label)
const Range = withSlot(Progress.Range, "range")
const Track = withSlot(Progress.Track, "track")
const ValueText = withSlot(Progress.ValueText)
const View = withSlot(Progress.View)

export const Component = createRootComponent(Root, {
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

Component.displayName = "Progress"
