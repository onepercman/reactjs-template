import { Progress as BaseProgress, extendVariants } from "@heroui/react"

export const Progress = extendVariants(BaseProgress, {
  slots: {
    base: "",
    label: "",
    value: "",
    track: "",
    indicator: "",
  },
  variants: {
    size: {
      sm: {
        base: "h-1",
        label: "text-tiny",
        value: "text-tiny",
      },
      md: {
        base: "h-2",
        label: "text-small",
        value: "text-small",
      },
      lg: {
        base: "h-3",
        label: "text-medium",
        value: "text-medium",
      },
    },
    color: {
      default: {
        track: "bg-default-100",
        indicator: "bg-default",
      },
      primary: {
        track: "bg-primary-100",
        indicator: "bg-primary",
      },
      secondary: {
        track: "bg-secondary-100",
        indicator: "bg-secondary",
      },
      success: {
        track: "bg-success-100",
        indicator: "bg-success",
      },
      warning: {
        track: "bg-warning-100",
        indicator: "bg-warning",
      },
      danger: {
        track: "bg-danger-100",
        indicator: "bg-danger",
      },
    },
    radius: {
      none: {
        base: "rounded-none",
      },
      sm: {
        base: "rounded-small",
      },
      md: {
        base: "rounded-medium",
      },
      lg: {
        base: "rounded-large",
      },
      full: {
        base: "rounded-full",
      },
    },
    isIndeterminate: {
      true: {
        indicator: "animate-progress-indeterminate",
      },
    },
    showValueLabel: {
      true: {
        base: "gap-2",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
    isIndeterminate: false,
    showValueLabel: false,
  },
})
