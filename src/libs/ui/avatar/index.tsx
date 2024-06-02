import * as Ark from "@ark-ui/react"
import React from "react"
import { VariantProps, tv } from "tailwind-variants"

const avatar = tv({
  slots: {
    base: "rounded-full aspect-square flex overflow-hidden flex-none relative",
    fallback: "m-auto",
    image: "object-cover inset-0",
  },
  variants: {
    size: {
      xs: { base: "w-6 h-6" },
      sm: { base: "w-10 h-10" },
      md: { base: "w-12 h-12" },
      lg: { base: "w-20 h-20" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

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
