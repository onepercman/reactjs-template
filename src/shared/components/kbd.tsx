import { Kbd as BaseKbd, extendVariants } from "@heroui/react"

export const Kbd = extendVariants(BaseKbd, {
  slots: {
    base: "",
  },
  variants: {
    size: {
      sm: {
        base: "px-1.5 py-0.5 text-tiny",
      },
      md: {
        base: "px-2 py-1 text-small",
      },
      lg: {
        base: "px-2.5 py-1.5 text-medium",
      },
    },
    color: {
      default: {
        base: "bg-default-100 text-default-foreground",
      },
      primary: {
        base: "bg-primary-100 text-primary-foreground",
      },
      secondary: {
        base: "bg-secondary-100 text-secondary-foreground",
      },
      success: {
        base: "bg-success-100 text-success-foreground",
      },
      warning: {
        base: "bg-warning-100 text-warning-foreground",
      },
      danger: {
        base: "bg-danger-100 text-danger-foreground",
      },
    },
    radius: {
      none: {
        base: "rounded-none",
      },
      sm: {
        base: "rounded-sm",
      },
      md: {
        base: "rounded-md",
      },
      lg: {
        base: "rounded-lg",
      },
      full: {
        base: "rounded-full",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
  },
})
