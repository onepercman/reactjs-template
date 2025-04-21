import { Snippet as BaseSnippet, extendVariants } from "@heroui/react"

export const Snippet = extendVariants(BaseSnippet, {
  slots: {
    base: "",
    pre: "",
    copyButton: "",
  },
  variants: {
    size: {
      sm: {
        base: "px-2 py-1 text-tiny",
        pre: "text-tiny",
      },
      md: {
        base: "px-3 py-1.5 text-small",
        pre: "text-small",
      },
      lg: {
        base: "px-4 py-2 text-medium",
        pre: "text-medium",
      },
    },
    color: {
      default: {
        base: "bg-default-100 text-default-900",
        copyButton: "text-default-500 hover:text-default-900",
      },
      primary: {
        base: "bg-primary-100 text-primary-900",
        copyButton: "text-primary-500 hover:text-primary-900",
      },
      secondary: {
        base: "bg-secondary-100 text-secondary-900",
        copyButton: "text-secondary-500 hover:text-secondary-900",
      },
      success: {
        base: "bg-success-100 text-success-900",
        copyButton: "text-success-500 hover:text-success-900",
      },
      warning: {
        base: "bg-warning-100 text-warning-900",
        copyButton: "text-warning-500 hover:text-warning-900",
      },
      danger: {
        base: "bg-danger-100 text-danger-900",
        copyButton: "text-danger-500 hover:text-danger-900",
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
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    isReadOnly: {
      true: {
        copyButton: "hidden",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
    isDisabled: false,
    isReadOnly: false,
  },
})
