import { Calendar as BaseCalendar, extendVariants } from "@heroui/react"

export const Calendar = extendVariants(BaseCalendar, {
  variants: {
    size: {
      sm: {
        base: "text-tiny",
      },
      md: {
        base: "text-small",
      },
      lg: {
        base: "text-medium",
      },
    },
    color: {
      default: {
        base: "text-default-foreground",
      },
      primary: {
        base: "text-primary-foreground",
      },
      secondary: {
        base: "text-secondary-foreground",
      },
      success: {
        base: "text-success-foreground",
      },
      warning: {
        base: "text-warning-foreground",
      },
      danger: {
        base: "text-danger-foreground",
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
    size: "md",
    color: "default",
    radius: "md",
  },
})
