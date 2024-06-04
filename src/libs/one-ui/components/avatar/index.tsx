import {
  AvatarSlotsClasses,
  AvatarVariantProps,
  avatar,
} from "@/libs/one-ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"

interface AvatarProps
  extends Ark.AvatarImageProps,
    AvatarVariantProps,
    AvatarSlotsClasses {
  fallback?: React.ReactNode
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(function (
  { size, fallback, className, classNames, ...props },
  ref,
) {
  const classes = avatar({ size })

  return (
    <Ark.Avatar.Root
      className={classes.base({ className, class: classNames?.base })}
    >
      <Ark.Avatar.Fallback
        className={classes.fallback({ className: classNames?.fallback })}
      >
        {fallback}
      </Ark.Avatar.Fallback>
      <Ark.Avatar.Image
        ref={ref}
        className={classes.image({ className: classNames?.image })}
        {...props}
      />
    </Ark.Avatar.Root>
  )
})
