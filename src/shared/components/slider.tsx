import { Slider as BaseSlider, extendVariants } from "@heroui/react"

export const Slider = extendVariants(BaseSlider, {
  slots: {
    base: "",
    track: "",
    filler: "",
    thumb: "",
    label: "",
    value: "",
  },
  variants: {
    size: {
      sm: {
        track: "h-1",
        thumb: "w-4 h-4",
        label: "text-tiny",
        value: "text-tiny",
      },
      md: {
        track: "h-2",
        thumb: "w-5 h-5",
        label: "text-small",
        value: "text-small",
      },
      lg: {
        track: "h-3",
        thumb: "w-6 h-6",
        label: "text-medium",
        value: "text-medium",
      },
    },
    color: {
      default: {
        track: "bg-default-100",
        filler: "bg-default",
        thumb: "bg-default-foreground",
      },
      primary: {
        track: "bg-primary-100",
        filler: "bg-primary",
        thumb: "bg-primary-foreground",
      },
      secondary: {
        track: "bg-secondary-100",
        filler: "bg-secondary",
        thumb: "bg-secondary-foreground",
      },
      success: {
        track: "bg-success-100",
        filler: "bg-success",
        thumb: "bg-success-foreground",
      },
      warning: {
        track: "bg-warning-100",
        filler: "bg-warning",
        thumb: "bg-warning-foreground",
      },
      danger: {
        track: "bg-danger-100",
        filler: "bg-danger",
        thumb: "bg-danger-foreground",
      },
    },
    radius: {
      none: {
        track: "rounded-none",
        thumb: "rounded-none",
      },
      sm: {
        track: "rounded-sm",
        thumb: "rounded-sm",
      },
      md: {
        track: "rounded-md",
        thumb: "rounded-md",
      },
      lg: {
        track: "rounded-lg",
        thumb: "rounded-lg",
      },
      full: {
        track: "rounded-full",
        thumb: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
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
    isDisabled: false,
    showValueLabel: false,
  },
})
