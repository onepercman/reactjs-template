import { Link as BaseLink, extendVariants } from "@heroui/react"

export const Link = extendVariants(BaseLink, {
  variants: {
    color: {
      default: "text-default-600 hover:text-default-900",
      primary: "text-primary-600 hover:text-primary-900",
      secondary: "text-secondary-600 hover:text-secondary-900",
      success: "text-success-600 hover:text-success-900",
      warning: "text-warning-600 hover:text-warning-900",
      danger: "text-danger-600 hover:text-danger-900",
    },
    size: {
      sm: "text-tiny",
      md: "text-small",
      lg: "text-medium",
    },
    isUnderlined: {
      true: "underline",
      false: "no-underline",
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
    isUnderlined: false,
    isDisabled: false,
  },
})
