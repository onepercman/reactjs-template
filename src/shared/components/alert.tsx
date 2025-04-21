import { Alert as BaseAlert, extendVariants } from "@heroui/react"

export const Alert = extendVariants(BaseAlert, {
  variants: {
    variant: {
      flat: {
        base: "bg-transparent",
      },
      solid: {
        base: "",
      },
      bordered: {
        base: "border-medium bg-transparent",
      },
      light: {
        base: "bg-default-100",
      },
      shadow: {
        base: "shadow-lg",
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
  },
  defaultVariants: {
    variant: "flat",
    color: "default",
    radius: "lg",
  },
})
