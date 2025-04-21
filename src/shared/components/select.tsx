import {
  Select as BaseSelect,
  SelectItem,
  SelectSection,
  extendVariants,
} from "@heroui/react"

export const Select = extendVariants(BaseSelect, {
  variants: {
    size: {
      sm: {
        trigger: "h-8 px-2",
        value: "text-tiny",
      },
      md: {
        trigger: "h-10 px-3",
        value: "text-small",
      },
      lg: {
        trigger: "h-12 px-4",
        value: "text-medium",
      },
    },
    color: {
      default: {
        trigger: "bg-default text-default-foreground",
      },
      primary: {
        trigger: "bg-primary text-primary-foreground",
      },
      secondary: {
        trigger: "bg-secondary text-secondary-foreground",
      },
      success: {
        trigger: "bg-success text-success-foreground",
      },
      warning: {
        trigger: "bg-warning text-warning-foreground",
      },
      danger: {
        trigger: "bg-danger text-danger-foreground",
      },
    },
    variant: {
      flat: {
        trigger: "bg-transparent",
      },
      bordered: {
        trigger: "border-medium bg-transparent",
      },
      faded: {
        trigger: "border-medium bg-default-50",
      },
      underlined: {
        trigger: "border-b-medium bg-transparent rounded-none px-0",
      },
    },
    radius: {
      none: {
        trigger: "rounded-none",
      },
      sm: {
        trigger: "rounded-small",
      },
      md: {
        trigger: "rounded-medium",
      },
      lg: {
        trigger: "rounded-large",
      },
      full: {
        trigger: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        trigger: "opacity-disabled pointer-events-none",
      },
    },
    isReadOnly: {
      true: {
        trigger: "opacity-readonly",
      },
    },
    isInvalid: {
      true: {
        trigger: "border-danger",
      },
    },
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    variant: "bordered",
    radius: "md",
    isDisabled: false,
    isReadOnly: false,
    isInvalid: false,
    isRequired: false,
  },
})

export { SelectItem, SelectSection }
