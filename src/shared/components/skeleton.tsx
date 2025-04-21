import { Skeleton as BaseSkeleton, extendVariants } from "@heroui/react"

export const Skeleton = extendVariants(BaseSkeleton, {
  slots: {
    base: "",
  },
  variants: {
    isLoaded: {
      true: {
        base: "opacity-0",
      },
      false: {
        base: "animate-pulse",
      },
    },
    radius: {
      none: {
        base: "rounded-none",
      },
      sm: {
        base: "rounded-small",
      },
      md: {
        base: "rounded-medium",
      },
      lg: {
        base: "rounded-large",
      },
      full: {
        base: "rounded-full",
      },
    },
  },
  defaultVariants: {
    isLoaded: false,
    radius: "md",
  },
})
