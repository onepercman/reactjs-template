import { Drawer as BaseDrawer, extendVariants } from "@heroui/react"

export const Drawer = extendVariants(BaseDrawer, {
  slots: {
    base: "",
    content: "",
    header: "",
    body: "",
    footer: "",
    closeButton: "",
    backdrop: "",
  },
  variants: {
    size: {
      sm: {
        content: "w-80",
        header: "p-4",
        body: "p-4",
        footer: "p-4",
      },
      md: {
        content: "w-96",
        header: "p-5",
        body: "p-5",
        footer: "p-5",
      },
      lg: {
        content: "w-[500px]",
        header: "p-6",
        body: "p-6",
        footer: "p-6",
      },
      xl: {
        content: "w-[600px]",
        header: "p-7",
        body: "p-7",
        footer: "p-7",
      },
      full: {
        content: "w-full",
        header: "p-8",
        body: "p-8",
        footer: "p-8",
      },
    },
    color: {
      default: {
        content: "bg-default text-default-foreground",
        header: "border-b border-default-200",
        footer: "border-t border-default-200",
      },
      primary: {
        content: "bg-primary text-primary-foreground",
        header: "border-b border-primary-200",
        footer: "border-t border-primary-200",
      },
      secondary: {
        content: "bg-secondary text-secondary-foreground",
        header: "border-b border-secondary-200",
        footer: "border-t border-secondary-200",
      },
      success: {
        content: "bg-success text-success-foreground",
        header: "border-b border-success-200",
        footer: "border-t border-success-200",
      },
      warning: {
        content: "bg-warning text-warning-foreground",
        header: "border-b border-warning-200",
        footer: "border-t border-warning-200",
      },
      danger: {
        content: "bg-danger text-danger-foreground",
        header: "border-b border-danger-200",
        footer: "border-t border-danger-200",
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
        content: "top-0 left-0 right-0",
      },
      bottom: {
        content: "bottom-0 left-0 right-0",
      },
      left: {
        content: "left-0 top-0 bottom-0",
      },
      right: {
        content: "right-0 top-0 bottom-0",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "none",
    placement: "right",
  },
})
