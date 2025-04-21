import { Radio as BaseRadio, extendVariants } from "@heroui/react"

export const Radio = extendVariants(BaseRadio, {
  slots: {
    base: "",
    wrapper: "",
    label: "",
    description: "",
    input: "",
    control: "",
  },
  variants: {
    size: {
      sm: {
        wrapper: "gap-2",
        label: "text-tiny",
        description: "text-tiny",
        control: "w-4 h-4",
      },
      md: {
        wrapper: "gap-3",
        label: "text-small",
        description: "text-small",
        control: "w-5 h-5",
      },
      lg: {
        wrapper: "gap-4",
        label: "text-medium",
        description: "text-medium",
        control: "w-6 h-6",
      },
    },
    color: {
      default: {
        control: "border-default-400",
        input: "checked:bg-default-500",
      },
      primary: {
        control: "border-primary-400",
        input: "checked:bg-primary-500",
      },
      secondary: {
        control: "border-secondary-400",
        input: "checked:bg-secondary-500",
      },
      success: {
        control: "border-success-400",
        input: "checked:bg-success-500",
      },
      warning: {
        control: "border-warning-400",
        input: "checked:bg-warning-500",
      },
      danger: {
        control: "border-danger-400",
        input: "checked:bg-danger-500",
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
  },
  defaultVariants: {
    size: "md",
    color: "default",
    isDisabled: false,
    isRequired: false,
  },
})
