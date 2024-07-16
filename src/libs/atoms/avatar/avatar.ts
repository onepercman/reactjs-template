import { Avatar } from "@ark-ui/react"
import { createComponentCtx } from "../utils/component-ctx"
import { avatar } from "./variants"

const { withRoot, withSlot } = createComponentCtx(avatar)

export const Root = withRoot(Avatar.Root, "base")
export const RootProvider = withSlot(Avatar.RootProvider)
export const Image = withSlot(Avatar.Image, "image")
export const Fallback = withSlot(Avatar.Fallback, "fallback")
export const Context = withSlot(Avatar.Context)

export { AvatarCompact as Compact } from "./compact"
