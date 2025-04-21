import { Menu as BaseMenu, extendVariants } from "@heroui/react"

export const Menu = extendVariants(BaseMenu, {
  slots: {
    base: "",
    trigger: "",
    menu: "",
    item: "",
    section: "",
    sectionHeading: "",
  },
  variants: {
    size: {
      sm: {
        trigger: "px-3 h-8 text-tiny",
        item: "px-3 h-8 text-tiny",
      },
      md: {
        trigger: "px-4 h-10 text-small",
        item: "px-4 h-10 text-small",
      },
      lg: {
        trigger: "px-6 h-12 text-medium",
        item: "px-6 h-12 text-medium",
      },
    },
    color: {
      default: {
        item: "data-[selected=true]:bg-default data-[selected=true]:text-default-foreground",
      },
      primary: {
        item: "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
      },
      secondary: {
        item: "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
      },
      success: {
        item: "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
      },
      warning: {
        item: "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
      },
      danger: {
        item: "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground",
      },
    },
    radius: {
      none: {
        trigger: "rounded-none",
        menu: "rounded-none",
      },
      sm: {
        trigger: "rounded-sm",
        menu: "rounded-sm",
      },
      md: {
        trigger: "rounded-md",
        menu: "rounded-md",
      },
      lg: {
        trigger: "rounded-lg",
        menu: "rounded-lg",
      },
      full: {
        trigger: "rounded-full",
        menu: "rounded-full",
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
