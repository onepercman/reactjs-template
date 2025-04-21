import { Toast as BaseToast, extendVariants } from "@heroui/react"

export const Toast = extendVariants(BaseToast, {
  slots: {
    base: "",
    title: "",
    description: "",
    closeButton: "",
    icon: "",
  },
  variants: {
    size: {
      sm: {
        base: "p-2",
        title: "text-tiny",
        description: "text-tiny",
      },
      md: {
        base: "p-3",
        title: "text-small",
        description: "text-small",
      },
      lg: {
        base: "p-4",
        title: "text-medium",
        description: "text-medium",
      },
    },
    color: {
      default: {
        base: "bg-default-100 text-default-900",
        closeButton: "text-default-500 hover:text-default-900",
      },
      primary: {
        base: "bg-primary-100 text-primary-900",
        closeButton: "text-primary-500 hover:text-primary-900",
      },
      secondary: {
        base: "bg-secondary-100 text-secondary-900",
        closeButton: "text-secondary-500 hover:text-secondary-900",
      },
      success: {
        base: "bg-success-100 text-success-900",
        closeButton: "text-success-500 hover:text-success-900",
      },
      warning: {
        base: "bg-warning-100 text-warning-900",
        closeButton: "text-warning-500 hover:text-warning-900",
      },
      danger: {
        base: "bg-danger-100 text-danger-900",
        closeButton: "text-danger-500 hover:text-danger-900",
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
    isClosable: {
      true: {
        closeButton: "block",
      },
      false: {
        closeButton: "hidden",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
    isClosable: true,
  },
})
