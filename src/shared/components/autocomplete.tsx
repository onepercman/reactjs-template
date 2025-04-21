import {
  AutocompleteItem,
  AutocompleteSection,
  Autocomplete as BaseAutocomplete,
  extendVariants,
} from "@heroui/react"

export const Autocomplete = extendVariants(BaseAutocomplete, {
  variants: {
    size: {
      sm: {
        base: "h-8 px-2 text-tiny",
      },
      md: {
        base: "h-10 px-3 text-small",
      },
      lg: {
        base: "h-12 px-4 text-medium",
      },
    },
    color: {
      default: {
        base: "bg-default text-default-foreground",
      },
      primary: {
        base: "bg-primary text-primary-foreground",
      },
      secondary: {
        base: "bg-secondary text-secondary-foreground",
      },
      success: {
        base: "bg-success text-success-foreground",
      },
      warning: {
        base: "bg-warning text-warning-foreground",
      },
      danger: {
        base: "bg-danger text-danger-foreground",
      },
    },
    variant: {
      flat: {
        base: "bg-transparent",
      },
      bordered: {
        base: "border-medium bg-transparent",
      },
      faded: {
        base: "border-medium bg-default-50",
      },
      underlined: {
        base: "border-b-medium bg-transparent rounded-none px-0",
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
        base: "opacity-readonly",
      },
    },
    isInvalid: {
      true: {
        base: "border-danger",
      },
    },
    isRequired: {
      true: {
        base: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    variant: "bordered",
    radius: "md",
    isDisabled: "false",
    isReadOnly: "false",
    isInvalid: "false",
    isRequired: "false",
  },
})

export { AutocompleteItem, AutocompleteSection }
