import { DateInput as BaseDateInput, extendVariants } from "@heroui/react"

export const DateInput = extendVariants(BaseDateInput, {
  slots: {
    base: "",
    input: "",
    label: "",
    description: "",
    errorMessage: "",
    calendar: "",
  },
  variants: {
    size: {
      sm: {
        input: "px-3 h-8 text-tiny",
        label: "text-tiny",
        description: "text-tiny",
        errorMessage: "text-tiny",
      },
      md: {
        input: "px-4 h-10 text-small",
        label: "text-small",
        description: "text-small",
        errorMessage: "text-small",
      },
      lg: {
        input: "px-6 h-12 text-medium",
        label: "text-medium",
        description: "text-medium",
        errorMessage: "text-medium",
      },
    },
    color: {
      default: {
        input: "border-default-400",
      },
      primary: {
        input: "border-primary-400",
      },
      secondary: {
        input: "border-secondary-400",
      },
      success: {
        input: "border-success-400",
      },
      warning: {
        input: "border-warning-400",
      },
      danger: {
        input: "border-danger-400",
      },
    },
    radius: {
      none: {
        input: "rounded-none",
      },
      sm: {
        input: "rounded-sm",
      },
      md: {
        input: "rounded-md",
      },
      lg: {
        input: "rounded-lg",
      },
      full: {
        input: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
    isInvalid: {
      true: {
        input: "border-danger",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
    isDisabled: false,
    isRequired: false,
    isInvalid: false,
  },
})
