import { Progress, ProgressRootProps } from "@ark-ui/react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
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

export interface Progress extends ForwardedRefComponent {
  (props: ProgressRootProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Circle: typeof Circle
  CircleRange: typeof CircleRange
  CircleTrack: typeof CircleTrack
  Context: typeof Context
  Label: typeof Label
  Range: typeof Range
  Track: typeof Track
  ValueText: typeof ValueText
  View: typeof View
}

export const Component = Root as any as Progress

Component.displayName = "Progress"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Circle = Circle
Component.CircleRange = CircleRange
Component.CircleTrack = CircleTrack
Component.Context = Context
Component.Label = Label
Component.Range = Range
Component.Track = Track
Component.ValueText = ValueText
Component.View = View
