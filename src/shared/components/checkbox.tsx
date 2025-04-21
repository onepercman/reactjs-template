import {
  Checkbox as BaseCheckbox,
  CheckboxGroup,
  extendVariants,
} from "@heroui/react"

export const Checkbox = extendVariants(BaseCheckbox, {
  variants: {
    size: {
      sm: {
        wrapper: "w-4 h-4",
      },
      md: {
        wrapper: "w-5 h-5",
      },
      lg: {
        wrapper: "w-6 h-6",
      },
    },
    color: {
      default: {
        wrapper: "bg-default text-default-foreground",
      },
      primary: {
        wrapper: "bg-primary text-primary-foreground",
      },
      secondary: {
        wrapper: "bg-secondary text-secondary-foreground",
      },
      success: {
        wrapper: "bg-success text-success-foreground",
      },
      warning: {
        wrapper: "bg-warning text-warning-foreground",
      },
      danger: {
        wrapper: "bg-danger text-danger-foreground",
      },
    },
    radius: {
      none: {
        wrapper: "rounded-none",
      },
      sm: {
        wrapper: "rounded-small",
      },
      md: {
        wrapper: "rounded-medium",
      },
      lg: {
        wrapper: "rounded-large",
      },
      full: {
        wrapper: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        wrapper: "opacity-disabled pointer-events-none",
      },
    },
    isSelected: {
      true: {
        wrapper: "bg-opacity-100",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    radius: "md",
    isDisabled: "false",
    isSelected: "false",
  },
})

export { CheckboxGroup }
