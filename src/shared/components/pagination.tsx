import { Pagination as BasePagination, extendVariants } from "@heroui/react"

export const Pagination = extendVariants(BasePagination, {
  slots: {
    base: "",
    item: "",
    cursor: "",
    prev: "",
    next: "",
    ellipsis: "",
  },
  variants: {
    size: {
      sm: {
        item: "w-8 h-8 text-tiny",
        cursor: "w-8 h-8",
        prev: "w-8 h-8",
        next: "w-8 h-8",
        ellipsis: "w-8 h-8",
      },
      md: {
        item: "w-10 h-10 text-small",
        cursor: "w-10 h-10",
        prev: "w-10 h-10",
        next: "w-10 h-10",
        ellipsis: "w-10 h-10",
      },
      lg: {
        item: "w-12 h-12 text-medium",
        cursor: "w-12 h-12",
        prev: "w-12 h-12",
        next: "w-12 h-12",
        ellipsis: "w-12 h-12",
      },
    },
    color: {
      default: {
        cursor: "bg-default text-default-foreground",
      },
      primary: {
        cursor: "bg-primary text-primary-foreground",
      },
      secondary: {
        cursor: "bg-secondary text-secondary-foreground",
      },
      success: {
        cursor: "bg-success text-success-foreground",
      },
      warning: {
        cursor: "bg-warning text-warning-foreground",
      },
      danger: {
        cursor: "bg-danger text-danger-foreground",
      },
    },
    radius: {
      none: {
        item: "rounded-none",
        cursor: "rounded-none",
        prev: "rounded-none",
        next: "rounded-none",
        ellipsis: "rounded-none",
      },
      sm: {
        item: "rounded-sm",
        cursor: "rounded-sm",
        prev: "rounded-sm",
        next: "rounded-sm",
        ellipsis: "rounded-sm",
      },
      md: {
        item: "rounded-md",
        cursor: "rounded-md",
        prev: "rounded-md",
        next: "rounded-md",
        ellipsis: "rounded-md",
      },
      lg: {
        item: "rounded-lg",
        cursor: "rounded-lg",
        prev: "rounded-lg",
        next: "rounded-lg",
        ellipsis: "rounded-lg",
      },
      full: {
        item: "rounded-full",
        cursor: "rounded-full",
        prev: "rounded-full",
        next: "rounded-full",
        ellipsis: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
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
