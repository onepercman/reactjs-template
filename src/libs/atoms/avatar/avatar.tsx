import { Avatar } from "@ark-ui/react"
import { createCtx, createFactory } from "../utils"
import { avatar } from "./variants"

const { withRoot, withSlot } = createCtx(avatar)

const Root = withRoot(Avatar.Root, "base")
const RootProvider = withSlot(Avatar.RootProvider, "base")
const Context = withSlot(Avatar.Context)
const Image = withSlot(Avatar.Image, "image")
const Fallback = withSlot(Avatar.Fallback, "fallback")

export const Component = createFactory(Root, {
  Root,
  RootProvider,
  Context,
  Image,
  Fallback,
})

Component.displayName = "Avatar"
