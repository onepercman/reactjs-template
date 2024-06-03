import { avatar } from "@/libs/ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"
import { VariantProps } from "tailwind-variants"

interface AvatarProps extends Ark.AvatarImageProps, VariantProps<typeof avatar> {
  fallback?: React.ReactNode
}

export const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(function (
  { size, className, fallback, ...props },
  ref,
) {
  const classes = avatar({ size })

  return (
    <Ark.Avatar.Root className={classes.base({ className })}>
      <Ark.Avatar.Fallback className={classes.fallback()}>{fallback}</Ark.Avatar.Fallback>
      <Ark.Avatar.Image ref={ref} className={classes.image()} {...props} />
    </Ark.Avatar.Root>
  )
})
