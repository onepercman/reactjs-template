import { Ripple as BaseRipple, extendVariants } from "@heroui/react"

export const Ripple = extendVariants(BaseRipple, {
  variants: {
    color: {
      default: "bg-default-foreground/20",
      primary: "bg-primary-foreground/20",
      secondary: "bg-secondary-foreground/20",
      success: "bg-success-foreground/20",
      warning: "bg-warning-foreground/20",
      danger: "bg-danger-foreground/20",
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
  },
  defaultVariants: {
    color: "default",
    isDisabled: false,
  },
})
