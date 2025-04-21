import { Table as BaseTable, extendVariants } from "@heroui/react"

export const Table = extendVariants(BaseTable, {
  slots: {
    base: "",
    wrapper: "",
    thead: "",
    tbody: "",
    tr: "",
    th: "",
    td: "",
    tfoot: "",
  },
  variants: {
    size: {
      sm: {
        th: "px-2 py-1 text-xs",
        td: "px-2 py-1 text-xs",
      },
      md: {
        th: "px-3 py-2 text-sm",
        td: "px-3 py-2 text-sm",
      },
      lg: {
        th: "px-4 py-3 text-base",
        td: "px-4 py-3 text-base",
      },
    },
    color: {
      default: {
        th: "bg-default text-default-foreground",
        tr: "hover:bg-default/50",
      },
      primary: {
        th: "bg-primary text-primary-foreground",
        tr: "hover:bg-primary/50",
      },
      secondary: {
        th: "bg-secondary text-secondary-foreground",
        tr: "hover:bg-secondary/50",
      },
      success: {
        th: "bg-success text-success-foreground",
        tr: "hover:bg-success/50",
      },
      warning: {
        th: "bg-warning text-warning-foreground",
        tr: "hover:bg-warning/50",
      },
      danger: {
        th: "bg-danger text-danger-foreground",
        tr: "hover:bg-danger/50",
      },
    },
    radius: {
      none: {
        base: "rounded-none",
        th: "rounded-none",
      },
      sm: {
        base: "rounded-sm",
        th: "rounded-sm",
      },
      md: {
        base: "rounded-md",
        th: "rounded-md",
      },
      lg: {
        base: "rounded-lg",
        th: "rounded-lg",
      },
      full: {
        base: "rounded-full",
        th: "rounded-full",
      },
    },
    isStriped: {
      true: {
        tr: "even:bg-default/50",
      },
    },
    isBordered: {
      true: {
        base: "border border-default",
        th: "border border-default",
        td: "border border-default",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "none",
    isStriped: false,
    isBordered: false,
  },
})
