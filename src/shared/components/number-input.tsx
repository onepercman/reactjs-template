import { NumberInput as BaseNumberInput, extendVariants } from "@heroui/react"

export const NumberInput = extendVariants(BaseNumberInput, {
  slots: {
    base: "",
    input: "",
    label: "",
    description: "",
    errorMessage: "",
    incrementButton: "",
    decrementButton: "",
  },
  variants: {
    size: {
      sm: {
        input: "px-3 h-8 text-tiny",
        label: "text-tiny",
        description: "text-tiny",
        errorMessage: "text-tiny",
        incrementButton: "h-8 w-8",
        decrementButton: "h-8 w-8",
      },
      md: {
        input: "px-4 h-10 text-small",
        label: "text-small",
        description: "text-small",
        errorMessage: "text-small",
        incrementButton: "h-10 w-10",
        decrementButton: "h-10 w-10",
      },
      lg: {
        input: "px-6 h-12 text-medium",
        label: "text-medium",
        description: "text-medium",
        errorMessage: "text-medium",
        incrementButton: "h-12 w-12",
        decrementButton: "h-12 w-12",
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
        incrementButton: "rounded-none",
        decrementButton: "rounded-none",
      },
      sm: {
        input: "rounded-sm",
        incrementButton: "rounded-sm",
        decrementButton: "rounded-sm",
      },
      md: {
        input: "rounded-md",
        incrementButton: "rounded-md",
        decrementButton: "rounded-md",
      },
      lg: {
        input: "rounded-lg",
        incrementButton: "rounded-lg",
        decrementButton: "rounded-lg",
      },
      full: {
        input: "rounded-full",
        incrementButton: "rounded-full",
        decrementButton: "rounded-full",
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
