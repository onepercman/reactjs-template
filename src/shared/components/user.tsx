import { User as BaseUser, extendVariants } from "@heroui/react"

export const User = extendVariants(BaseUser, {
  slots: {
    base: "",
    wrapper: "",
    name: "",
    description: "",
    avatar: "",
  },
  variants: {
    size: {
      sm: {
        wrapper: "gap-2",
        name: "text-tiny",
        description: "text-tiny",
        avatar: "w-8 h-8",
      },
      md: {
        wrapper: "gap-3",
        name: "text-small",
        description: "text-small",
        avatar: "w-10 h-10",
      },
      lg: {
        wrapper: "gap-4",
        name: "text-medium",
        description: "text-medium",
        avatar: "w-12 h-12",
      },
    },
    color: {
      default: {
        name: "text-default-900",
        description: "text-default-500",
      },
      primary: {
        name: "text-primary-900",
        description: "text-primary-500",
      },
      secondary: {
        name: "text-secondary-900",
        description: "text-secondary-500",
      },
      success: {
        name: "text-success-900",
        description: "text-success-500",
      },
      warning: {
        name: "text-warning-900",
        description: "text-warning-500",
      },
      danger: {
        name: "text-danger-900",
        description: "text-danger-500",
      },
    },
    radius: {
      none: {
        avatar: "rounded-none",
      },
      sm: {
        avatar: "rounded-small",
      },
      md: {
        avatar: "rounded-medium",
      },
      lg: {
        avatar: "rounded-large",
      },
      full: {
        avatar: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        wrapper: "opacity-disabled pointer-events-none",
      },
    },
    isReadOnly: {
      true: {
        wrapper: "opacity-readonly",
      },
    },
    isInvalid: {
      true: {
        name: "text-danger-900",
        description: "text-danger-500",
      },
    },
  },
  compoundVariants: [
    {
      isInvalid: true,
      color: "default",
      class: "text-danger-900 text-danger-500",
    },
    {
      isInvalid: true,
      color: "primary",
      class: "text-danger-900 text-danger-500",
    },
    {
      isInvalid: true,
      color: "secondary",
      class: "text-danger-900 text-danger-500",
    },
    {
      isInvalid: true,
      color: "success",
      class: "text-danger-900 text-danger-500",
    },
    {
      isInvalid: true,
      color: "warning",
      class: "text-danger-900 text-danger-500",
    },
    {
      isInvalid: true,
      color: "danger",
      class: "text-danger-900 text-danger-500",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "full",
    isDisabled: false,
    isReadOnly: false,
    isInvalid: false,
  },
})
