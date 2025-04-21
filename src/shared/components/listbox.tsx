import { Listbox as BaseListbox, extendVariants } from "@heroui/react"

export const Listbox = extendVariants(BaseListbox, {
  slots: {
    base: "",
    trigger: "",
    listbox: "",
    listboxItem: "",
    popover: "",
    section: "",
    sectionHeading: "",
  },
  variants: {
    size: {
      sm: {
        trigger: "px-3 h-8 text-tiny",
        listboxItem: "px-3 h-8 text-tiny",
      },
      md: {
        trigger: "px-4 h-10 text-small",
        listboxItem: "px-4 h-10 text-small",
      },
      lg: {
        trigger: "px-6 h-12 text-medium",
        listboxItem: "px-6 h-12 text-medium",
      },
    },
    color: {
      default: {
        listboxItem:
          "data-[selected=true]:bg-default data-[selected=true]:text-default-foreground",
      },
      primary: {
        listboxItem:
          "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
      },
      secondary: {
        listboxItem:
          "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
      },
      success: {
        listboxItem:
          "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
      },
      warning: {
        listboxItem:
          "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
      },
      danger: {
        listboxItem:
          "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground",
      },
    },
    radius: {
      none: {
        trigger: "rounded-none",
        listbox: "rounded-none",
      },
      sm: {
        trigger: "rounded-sm",
        listbox: "rounded-sm",
      },
      md: {
        trigger: "rounded-md",
        listbox: "rounded-md",
      },
      lg: {
        trigger: "rounded-lg",
        listbox: "rounded-lg",
      },
      full: {
        trigger: "rounded-full",
        listbox: "rounded-full",
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
