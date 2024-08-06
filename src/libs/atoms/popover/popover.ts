import { Popover } from "@ark-ui/react"
import { createComponentCtx } from "../utils"
import { popover } from "./variants"

const { withRoot, withSlot } = createComponentCtx(popover)

export const Root = withRoot(Popover.Root)
export const Anchor = withSlot(Popover.Anchor)
export const Arrow = withSlot(Popover.Arrow, "arrowTip")
export const ArrowTip = withSlot(Popover.ArrowTip)
export const CloseTrigger = withSlot(Popover.CloseTrigger)
export const Content = withSlot(Popover.Content, "base")
export const Context = withSlot(Popover.Context)
export const Description = withSlot(Popover.Description)
export const Indicator = withSlot(Popover.Indicator)
export const Positioner = withSlot(Popover.Positioner)
export const RootProvider = withSlot(Popover.RootProvider)
export const Title = withSlot(Popover.Title)
export const Trigger = withSlot(Popover.Trigger)

export { Popover as Compact } from "./compact"
