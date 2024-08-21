import { Avatar } from "@ark-ui/react"
import React from "react"
import { createCtx, createNested } from "../utils"
import { avatar } from "./variants"

const { withRoot, withSlot } = createCtx(avatar)

const Root = withRoot(Avatar.Root, "base")
const RootProvider = withSlot(Avatar.RootProvider, "base")
const Context = withSlot(Avatar.Context)
const Image = withSlot(Avatar.Image, "image")
const Fallback = withSlot(Avatar.Fallback, "fallback")

const Compact = React.forwardRef<
  React.ComponentRef<typeof Root>,
  React.ComponentProps<typeof Image> & {
    seed?: any
    fallback?: React.ReactNode
  }
>(function ({ fallback, seed, ...props }, ref) {
  const defaultFallback = (
    <img
      src={`https://api.dicebear.com/9.x/initials/svg?seed=${seed}`}
      alt={seed}
      className="h-full w-full object-cover"
    />
  )

  return (
    <Root ref={ref} {...props}>
      <Fallback>{fallback || defaultFallback}</Fallback>
      <Image {...props} />
    </Root>
  )
})

export const Component = createNested(Compact, {
  Root,
  RootProvider,
  Context,
  Image,
  Fallback,
})

Component.displayName = "Avatar"
