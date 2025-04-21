import { Divider as BaseDivider, extendVariants } from "@heroui/react"

export const Divider = extendVariants(BaseDivider, {
  variants: {
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    },
    color: {
      default: "bg-default",
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger",
    },
    size: {
      sm: "my-2",
      md: "my-4",
      lg: "my-6",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    color: "default",
    size: "md",
  },
})
