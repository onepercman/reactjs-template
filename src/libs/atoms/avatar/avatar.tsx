import { Avatar, AvatarImageProps } from "@ark-ui/react"
import React from "react"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils/component-ctx"
import { avatar } from "./variants"

const { withRoot, withSlot } = createComponentCtx(avatar)

const Root = withRoot(Avatar.Root, "base")
const RootProvider = withSlot(Avatar.RootProvider, "base")
const Context = withSlot(Avatar.Context)
const Image = withSlot(Avatar.Image, "image")
const Fallback = withSlot(Avatar.Fallback, "fallback")

export interface AvatarProps extends AvatarImageProps, ComposedTVProps<typeof avatar> {
  fallback?: React.ReactNode
}
export interface Avatar extends ForwardedRefComponent {
  (props: AvatarProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Context: typeof Context
  Image: typeof Image
  Fallback: typeof Fallback
}

export const Component = Root as any as Avatar

Component.displayName = "Avatar"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Context = Context
Component.Image = Image
Component.Fallback = Fallback
