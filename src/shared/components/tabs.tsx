import { Tabs as BaseTabs, extendVariants } from "@heroui/react"

export const Tabs = extendVariants(BaseTabs, {
  slots: {
    base: "",
    tabList: "",
    tab: "",
    tabPanel: "",
    cursor: "",
  },
  variants: {
    size: {
      sm: {
        tab: "px-2 py-1 text-xs",
        tabPanel: "px-2 py-1 text-xs",
      },
      md: {
        tab: "px-3 py-2 text-sm",
        tabPanel: "px-3 py-2 text-sm",
      },
      lg: {
        tab: "px-4 py-3 text-base",
        tabPanel: "px-4 py-3 text-base",
      },
    },
    color: {
      default: {
        tab: "text-default-foreground hover:bg-default/50",
        cursor: "bg-default",
      },
      primary: {
        tab: "text-primary-foreground hover:bg-primary/50",
        cursor: "bg-primary",
      },
      secondary: {
        tab: "text-secondary-foreground hover:bg-secondary/50",
        cursor: "bg-secondary",
      },
      success: {
        tab: "text-success-foreground hover:bg-success/50",
        cursor: "bg-success",
      },
      warning: {
        tab: "text-warning-foreground hover:bg-warning/50",
        cursor: "bg-warning",
      },
      danger: {
        tab: "text-danger-foreground hover:bg-danger/50",
        cursor: "bg-danger",
      },
    },
    radius: {
      none: {
        tab: "rounded-none",
        cursor: "rounded-none",
      },
      sm: {
        tab: "rounded-sm",
        cursor: "rounded-sm",
      },
      md: {
        tab: "rounded-md",
        cursor: "rounded-md",
      },
      lg: {
        tab: "rounded-lg",
        cursor: "rounded-lg",
      },
      full: {
        tab: "rounded-full",
        cursor: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        tab: "opacity-50 cursor-not-allowed",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "none",
    isDisabled: false,
  },
})
