import { Input as BaseInput, extendVariants } from "@heroui/react"

export const Input = extendVariants(BaseInput, {
  variants: {
    size: {
      sm: {
        input: "h-8 px-2 text-tiny",
      },
      md: {
        input: "h-10 px-3 text-small",
      },
      lg: {
        input: "h-12 px-4 text-medium",
      },
    },
    color: {
      default: {
        input: "bg-default text-default-foreground",
      },
      primary: {
        input: "bg-primary text-primary-foreground",
      },
      secondary: {
        input: "bg-secondary text-secondary-foreground",
      },
      success: {
        input: "bg-success text-success-foreground",
      },
      warning: {
        input: "bg-warning text-warning-foreground",
      },
      danger: {
        input: "bg-danger text-danger-foreground",
      },
    },
    variant: {
      flat: {
        input: "bg-transparent",
      },
      bordered: {
        input: "border-medium bg-transparent",
      },
      faded: {
        input: "border-medium bg-default-50",
      },
      underlined: {
        input: "border-b-medium bg-transparent rounded-none px-0",
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
    variant: "bordered",
    radius: "md",
    isDisabled: false,
    isReadOnly: false,
    isInvalid: false,
    isRequired: false,
  },
})
