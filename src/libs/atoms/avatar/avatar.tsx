import { Avatar } from "@ark-ui/react"
import { createComponentCtx, createRootComponent } from "../utils/component-ctx"
import { avatar } from "./variants"

const { withRoot, withSlot } = createComponentCtx(avatar)

const Root = withRoot(Avatar.Root, "base")
const RootProvider = withSlot(Avatar.RootProvider, "base")
const Context = withSlot(Avatar.Context)
const Image = withSlot(Avatar.Image, "image")
const Fallback = withSlot(Avatar.Fallback, "fallback")

export const Component = createRootComponent(Root, {
  Root,
  RootProvider,
  Context,
  Image,
  Fallback,
})

Component.displayName = "Avatar"
