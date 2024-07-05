import * as Ark from "@ark-ui/react"
import React from "react"
import { ComposedTVProps } from "../types"
import { avatar } from "../variants"

export interface AvatarProps
  extends Ark.AvatarImageProps,
    ComposedTVProps<typeof avatar> {
  fallback?: React.ReactNode
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(function (
  { size, fallback, className, classNames, ...props },
  ref,
) {
  const styles = avatar({ size })

  return (
    <Ark.Avatar.Root
      className={styles.base({ className, class: classNames?.base })}
    >
      <Ark.Avatar.Fallback
        className={styles.fallback({ className: classNames?.fallback })}
      >
        {fallback}
      </Ark.Avatar.Fallback>
      <Ark.Avatar.Image
        ref={ref}
        className={styles.image({ className: classNames?.image })}
        {...props}
      />
    </Ark.Avatar.Root>
  )
})

Avatar.displayName = "Avatar"
