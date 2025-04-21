import {
  Breadcrumbs as BaseBreadcrumbs,
  BreadcrumbItem,
  extendVariants,
} from "@heroui/react"

export const Breadcrumbs = extendVariants(BaseBreadcrumbs, {
  variants: {
    size: {
      sm: {
        list: "text-tiny",
      },
      md: {
        list: "text-small",
      },
      lg: {
        list: "text-medium",
      },
    },
    color: {
      default: {
        list: "text-default-foreground",
      },
      primary: {
        list: "text-primary-foreground",
      },
      secondary: {
        list: "text-secondary-foreground",
      },
      success: {
        list: "text-success-foreground",
      },
      warning: {
        list: "text-warning-foreground",
      },
      danger: {
        list: "text-danger-foreground",
      },
    },
    radius: {
      none: {
        list: "rounded-none",
      },
      sm: {
        list: "rounded-small",
      },
      md: {
        list: "rounded-medium",
      },
      lg: {
        list: "rounded-large",
      },
      full: {
        list: "rounded-full",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
  },
})

export { BreadcrumbItem }
