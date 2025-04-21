import { Chip as BaseChip, extendVariants } from "@heroui/react"

export const Chip = extendVariants(BaseChip, {
  variants: {
    size: {
      sm: {
        base: "h-6 px-2",
        content: "text-tiny",
      },
      md: {
        base: "h-7 px-3",
        content: "text-small",
      },
      lg: {
        base: "h-8 px-4",
        content: "text-medium",
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
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    isCloseable: {
      true: {
        base: "pr-1",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    variant: "solid",
    radius: "full",
    isDisabled: false,
    isCloseable: false,
  },
})
