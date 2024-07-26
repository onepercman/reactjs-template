import { Dialog } from "@ark-ui/react"
import { createComponentCtx } from "../utils"
import { dialog } from "./variants"

const { withRoot, withSlot } = createComponentCtx(dialog)

export const Root = withRoot(Dialog.Root)
export const Backdrop = withSlot(Dialog.Backdrop, "backdrop")
export const CloseTrigger = withSlot(Dialog.CloseTrigger, "close")
export const Content = withSlot(Dialog.Content, "base")
export const Context = withSlot(Dialog.Context)
export const Description = withSlot(Dialog.Description, "description")
export const Positioner = withSlot(Dialog.Positioner, "positioner")
export const RootProvider = withSlot(Dialog.RootProvider)
export const Title = withSlot(Dialog.Title, "title")
export const Trigger = withSlot(Dialog.Trigger)

export { Dialog as Compact } from "./compact"
export * from "./fn"
