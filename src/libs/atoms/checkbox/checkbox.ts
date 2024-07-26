import { Checkbox } from "@ark-ui/react"
import { createComponentCtx } from "../utils"
import { checkbox } from "./variants"

const { withRoot, withSlot } = createComponentCtx(checkbox)

export const Root = withRoot(Checkbox.Root, "base")
export const Context = withSlot(Checkbox.Context)
export const Control = withSlot(Checkbox.Control, "control")
export const Group = withSlot(Checkbox.Group)
export const HiddenInput = withSlot(Checkbox.HiddenInput)
export const Indicator = withSlot(Checkbox.Indicator)
export const Label = withSlot(Checkbox.Label, "label")
export const RootProvider = withSlot(Checkbox.RootProvider)

export { Checkbox as Compact } from "./compact"
