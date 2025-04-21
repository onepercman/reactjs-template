import { InputOtp as BaseInputOtp, extendVariants } from "@heroui/react"

export const InputOtp = extendVariants(BaseInputOtp, {
  slots: {
    base: "",
    input: "",
    group: "",
    slot: "",
  },
  variants: {
    size: {
      sm: {
        input: "h-8 w-8 text-tiny",
        group: "gap-1",
      },
      md: {
        input: "h-10 w-10 text-small",
        group: "gap-2",
      },
      lg: {
        input: "h-12 w-12 text-medium",
        group: "gap-3",
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
    isInvalid: false,
  },
})
