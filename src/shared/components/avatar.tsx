"use client"

import { Avatar as BaseAvatar } from "@ark-ui/react"
import React from "react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { tv } from "tailwind-variants"

export const avatar = tv({
  base: "relative flex aspect-square flex-none overflow-hidden rounded-full",
  slots: {
    fallback: "m-auto",
    image: "inset-0 object-cover",
  },
  variants: {
    size: {
      xs: { base: "h-6 w-6" },
      sm: { base: "h-10 w-10" },
      md: { base: "h-12 w-12" },
      lg: { base: "h-20 w-20" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const { withRoot, withSlot } = createComponentFactory(avatar)

const Root = withRoot(BaseAvatar.Root, "base")
const RootProvider = withSlot(BaseAvatar.RootProvider, "base")
const Context = withSlot(BaseAvatar.Context)
const Image = withSlot(BaseAvatar.Image, "image")
const Fallback = withSlot(BaseAvatar.Fallback, "fallback")

const Compact = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Image> & {
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

Compact.displayName = "Avatar"

export const Avatar = createComponentTree(Compact, {
  Root,
  RootProvider,
  Context,
  Image,
  Fallback,
})

Avatar.displayName = "Avatar"
