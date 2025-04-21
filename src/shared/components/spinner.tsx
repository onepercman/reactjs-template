import { Spinner as BaseSpinner, extendVariants } from "@heroui/react"

export const Spinner = extendVariants(BaseSpinner, {
  slots: {
    base: "",
    circle1: "",
    circle2: "",
  },
  variants: {
    size: {
      sm: {
        base: "w-4 h-4",
      },
      md: {
        base: "w-6 h-6",
      },
      lg: {
        base: "w-8 h-8",
      },
    },
    color: {
      default: {
        circle1: "text-default",
        circle2: "text-default-foreground",
      },
      primary: {
        circle1: "text-primary",
        circle2: "text-primary-foreground",
      },
      secondary: {
        circle1: "text-secondary",
        circle2: "text-secondary-foreground",
      },
      success: {
        circle1: "text-success",
        circle2: "text-success-foreground",
      },
      warning: {
        circle1: "text-warning",
        circle2: "text-warning-foreground",
      },
      danger: {
        circle1: "text-danger",
        circle2: "text-danger-foreground",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
})
