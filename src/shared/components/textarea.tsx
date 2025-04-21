import { Textarea as BaseTextarea, extendVariants } from "@heroui/react"

export const Textarea = extendVariants(BaseTextarea, {
  slots: {
    base: "",
    input: "",
    label: "",
    description: "",
    errorMessage: "",
  },
  variants: {
    size: {
      sm: {
        input: "h-20 px-2 text-tiny",
        label: "text-tiny",
        description: "text-tiny",
        errorMessage: "text-tiny",
      },
      md: {
        input: "h-24 px-3 text-small",
        label: "text-small",
        description: "text-small",
        errorMessage: "text-small",
      },
      lg: {
        input: "h-28 px-4 text-medium",
        label: "text-medium",
        description: "text-medium",
        errorMessage: "text-medium",
      },
    },
    color: {
      default: {
        input: "border-default-200",
      },
      primary: {
        input: "border-primary-200",
      },
      secondary: {
        input: "border-secondary-200",
      },
      success: {
        input: "border-success-200",
      },
      warning: {
        input: "border-warning-200",
      },
      danger: {
        input: "border-danger-200",
      },
    },
    radius: {
      none: {
        input: "rounded-none",
      },
      sm: {
        input: "rounded-small",
      },
      md: {
        input: "rounded-medium",
      },
      lg: {
        input: "rounded-large",
      },
      full: {
        input: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        input: "opacity-disabled pointer-events-none",
      },
    },
    isReadOnly: {
      true: {
        input: "opacity-readonly",
      },
    },
    isInvalid: {
      true: {
        input: "border-danger",
      },
    },
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
    isDisabled: false,
    isReadOnly: false,
    isInvalid: false,
    isRequired: false,
  },
})
