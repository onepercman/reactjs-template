import { Tooltip as BaseTooltip, extendVariants } from "@heroui/react"

export const Tooltip = extendVariants(BaseTooltip, {
  slots: {
    base: "",
    content: "",
    trigger: "",
    arrow: "",
  },
  variants: {
    size: {
      sm: {
        content: "text-xs px-2 py-1",
      },
      md: {
        content: "text-sm px-3 py-2",
      },
      lg: {
        content: "text-base px-4 py-3",
      },
    },
    color: {
      default: {
        content: "text-default-foreground bg-default",
      },
      primary: {
        content: "text-primary-foreground bg-primary",
      },
      secondary: {
        content: "text-secondary-foreground bg-secondary",
      },
      success: {
        content: "text-success-foreground bg-success",
      },
      warning: {
        content: "text-warning-foreground bg-warning",
      },
      danger: {
        content: "text-danger-foreground bg-danger",
      },
    },
    radius: {
      none: {
        content: "rounded-none",
      },
      sm: {
        content: "rounded-sm",
      },
      md: {
        content: "rounded-md",
      },
      lg: {
        content: "rounded-lg",
      },
      full: {
        content: "rounded-full",
      },
    },
    placement: {
      top: {
        content: "bottom-0 left-1/2 -translate-x-1/2",
      },
      bottom: {
        content: "top-0 left-1/2 -translate-x-1/2",
      },
      left: {
        content: "right-0 top-1/2 -translate-y-1/2",
      },
      right: {
        content: "left-0 top-1/2 -translate-y-1/2",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "none",
    placement: "top",
  },
})
