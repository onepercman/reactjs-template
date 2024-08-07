import { Avatar, AvatarImageProps } from "@ark-ui/react"
import React from "react"
import { ComposedTVProps } from "../types"
import { createComponentCtx } from "../utils/component-ctx"
import { avatar } from "./variants"

const { withRoot, withSlot } = createComponentCtx(avatar)

export const Root = withRoot(Avatar.Root, "base")
export const RootProvider = withSlot(Avatar.RootProvider, "base")
export const Context = withSlot(Avatar.Context)
export const Image = withSlot(Avatar.Image, "image")
export const Fallback = withSlot(Avatar.Fallback, "fallback")

export interface AvatarCompactProps
  extends AvatarImageProps,
    ComposedTVProps<typeof avatar> {
  fallback?: React.ReactNode
}

export const Compact = React.forwardRef<HTMLImageElement, AvatarCompactProps>(
  function ({ fallback, ...props }, ref) {
    return (
      <Root ref={ref} {...props}>
        <Fallback>{fallback}</Fallback>
        <Image {...props} />
      </Root>
    )
  },
)

Compact.displayName = "Avatar"
