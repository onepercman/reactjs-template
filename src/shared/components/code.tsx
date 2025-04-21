import { Code as BaseCode, extendVariants } from "@heroui/react"

export const Code = extendVariants(BaseCode, {
  variants: {
    size: {
      sm: "text-tiny",
      md: "text-small",
      lg: "text-medium",
    },
    color: {
      default: "bg-default text-default-foreground",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      success: "bg-success text-success-foreground",
      warning: "bg-warning text-warning-foreground",
      danger: "bg-danger text-danger-foreground",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
  },
})
