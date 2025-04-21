import { Avatar as BaseAvatar, extendVariants } from "@heroui/react"

export const Avatar = extendVariants(BaseAvatar, {
  variants: {
    size: {
      xs: {
        base: "w-6 h-6",
        name: "text-tiny",
      },
      sm: {
        base: "w-8 h-8",
        name: "text-small",
      },
      md: {
        base: "w-10 h-10",
        name: "text-medium",
      },
      lg: {
        base: "w-12 h-12",
        name: "text-large",
      },
      xl: {
        base: "w-14 h-14",
        name: "text-xl",
      },
    },
    color: {
      default: {
        base: "bg-default text-default-foreground",
      },
      primary: {
        base: "bg-primary text-primary-foreground",
      },
      secondary: {
        base: "bg-secondary text-secondary-foreground",
      },
      success: {
        base: "bg-success text-success-foreground",
      },
      warning: {
        base: "bg-warning text-warning-foreground",
      },
      danger: {
        base: "bg-danger text-danger-foreground",
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
    isBordered: {
      true: {
        base: "ring-2 ring-offset-2 ring-offset-background",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "full",
    isBordered: false,
    isDisabled: false,
    isFocusVisible: false,
  },
})
