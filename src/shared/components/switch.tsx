import { Switch as BaseSwitch, extendVariants } from "@heroui/react"

export const Switch = extendVariants(BaseSwitch, {
  slots: {
    base: "",
    wrapper: "",
    thumb: "",
    label: "",
  },
  variants: {
    size: {
      sm: {
        base: "w-8 h-4",
        thumb: "w-3 h-3",
      },
      md: {
        base: "w-10 h-5",
        thumb: "w-4 h-4",
      },
      lg: {
        base: "w-12 h-6",
        thumb: "w-5 h-5",
      },
    },
    color: {
      default: {
        base: "bg-default",
        thumb: "bg-default-foreground",
      },
      primary: {
        base: "bg-primary",
        thumb: "bg-primary-foreground",
      },
      secondary: {
        base: "bg-secondary",
        thumb: "bg-secondary-foreground",
      },
      success: {
        base: "bg-success",
        thumb: "bg-success-foreground",
      },
      warning: {
        base: "bg-warning",
        thumb: "bg-warning-foreground",
      },
      danger: {
        base: "bg-danger",
        thumb: "bg-danger-foreground",
      },
    },
    radius: {
      none: {
        base: "rounded-none",
        thumb: "rounded-none",
      },
      sm: {
        base: "rounded-sm",
        thumb: "rounded-sm",
      },
      md: {
        base: "rounded-md",
        thumb: "rounded-md",
      },
      lg: {
        base: "rounded-lg",
        thumb: "rounded-lg",
      },
      full: {
        base: "rounded-full",
        thumb: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-50 cursor-not-allowed",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "full",
    isDisabled: false,
  },
})
