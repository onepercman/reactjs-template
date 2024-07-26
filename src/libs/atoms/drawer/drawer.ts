import { Drawer } from "vaul"
import { createComponentCtx } from "../utils"
import { drawer } from "./variants"

const { withRoot, withSlot } = createComponentCtx(drawer)

export const Root = withRoot(Drawer.Root, "base")
export const Close = withSlot(Drawer.Close, "close")
export const Content = withSlot(Drawer.Content, "content")
export const Description = withSlot(Drawer.Description, "description")
export const Handle = withSlot(Drawer.Handle, "handle")
export const NestedRoot = withSlot(Drawer.NestedRoot)
export const Overlay = withSlot(Drawer.Overlay, "overlay")
export const Portal = withSlot(Drawer.Portal)
export const Title = withSlot(Drawer.Title, "title")
export const Trigger = withSlot(Drawer.Trigger)

export {
  Drawer as Compact,
  type DrawerProps as CompactDrawerProps,
} from "./compact"
