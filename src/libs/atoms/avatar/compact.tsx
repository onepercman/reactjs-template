import { Avatar, AvatarImageProps } from "@ark-ui/react"
import React from "react"
import { ComposedTVProps } from "../types"
import { avatar } from "./variants"

export interface AvatarCompactProps
  extends AvatarImageProps,
    ComposedTVProps<typeof avatar> {
  fallback?: React.ReactNode
}

export const AvatarCompact = React.forwardRef<
  HTMLImageElement,
  AvatarCompactProps
>(function ({ size, fallback, className, classNames, ...props }, ref) {
  const styles = avatar({ size })

  return (
    <Avatar.Root
      className={styles.base({ className, class: classNames?.base })}
    >
      <Avatar.Fallback
        className={styles.fallback({ className: classNames?.fallback })}
      >
        {fallback}
      </Avatar.Fallback>
      <Avatar.Image
        ref={ref}
        className={styles.image({ className: classNames?.image })}
        {...props}
      />
    </Avatar.Root>
  )
})

AvatarCompact.displayName = "AvatarCompact"
