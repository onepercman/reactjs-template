import { Badge as BaseBadge, extendVariants } from "@heroui/react"

export const Badge = extendVariants(BaseBadge, {
  variants: {
    size: {
      xs: {
        base: "px-1 py-0.5",
        badge: "text-tiny",
      },
      sm: {
        base: "px-1.5 py-0.5",
        badge: "text-small",
      },
      md: {
        base: "px-2 py-0.5",
        badge: "text-medium",
      },
      lg: {
        base: "px-2.5 py-0.5",
        badge: "text-large",
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
    variant: {
      solid: {
        base: "",
      },
      flat: {
        base: "bg-opacity-20",
      },
      faded: {
        base: "border-medium bg-transparent",
      },
      bordered: {
        base: "border-medium bg-transparent",
      },
      light: {
        base: "bg-transparent",
      },
      dot: {
        base: "p-0",
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
    isInvisible: {
      true: {
        base: "opacity-0",
      },
    },
    isOneChar: {
      true: {
        base: "px-0 justify-center w-6",
      },
    },
    isDot: {
      true: {
        base: "p-0 w-2 h-2",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    variant: "solid",
    radius: "full",
    isInvisible: false,
    isOneChar: false,
    isDot: false,
  },
})
