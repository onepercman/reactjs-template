import { Dropdown as BaseDropdown, extendVariants } from "@heroui/react"

export const Dropdown = extendVariants(BaseDropdown, {
  slots: {
    base: "",
    trigger: "",
    content: "",
    backdrop: "",
    arrow: "",
  },
  variants: {
    size: {
      sm: {
        content: "p-1",
        trigger: "px-3 h-8 text-tiny",
      },
      md: {
        content: "p-2",
        trigger: "px-4 h-10 text-small",
      },
      lg: {
        content: "p-3",
        trigger: "px-6 h-12 text-medium",
      },
    },
    color: {
      default: {
        content: "bg-default text-default-foreground",
      },
      primary: {
        content: "bg-primary text-primary-foreground",
      },
      secondary: {
        content: "bg-secondary text-secondary-foreground",
      },
      success: {
        content: "bg-success text-success-foreground",
      },
      warning: {
        content: "bg-warning text-warning-foreground",
      },
      danger: {
        content: "bg-danger text-danger-foreground",
      },
    },
    radius: {
      none: {
        content: "rounded-none",
      },
      sm: {
        content: "rounded-small",
      },
      md: {
        content: "rounded-medium",
      },
      lg: {
        content: "rounded-large",
      },
      full: {
        content: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        trigger: "opacity-disabled pointer-events-none",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
    isDisabled: false,
  },
})
