import { Navbar as BaseNavbar, extendVariants } from "@heroui/react"

export const Navbar = extendVariants(BaseNavbar, {
  slots: {
    base: "",
    wrapper: "",
    content: "",
    brand: "",
    toggle: "",
    item: "",
    collapse: "",
  },
  variants: {
    isBordered: {
      true: {
        base: "border-b border-divider",
      },
    },
    isBlurred: {
      true: {
        base: "backdrop-blur-md bg-background/70",
      },
    },
    isMenuOpen: {
      true: {
        collapse: "max-h-[1000px]",
      },
      false: {
        collapse: "max-h-0",
      },
    },
    position: {
      static: {
        base: "static",
      },
      sticky: {
        base: "sticky top-0 z-50",
      },
      fixed: {
        base: "fixed top-0 z-50",
      },
    },
    maxWidth: {
      xs: {
        wrapper: "max-w-xs",
      },
      sm: {
        wrapper: "max-w-sm",
      },
      md: {
        wrapper: "max-w-md",
      },
      lg: {
        wrapper: "max-w-lg",
      },
      xl: {
        wrapper: "max-w-xl",
      },
      "2xl": {
        wrapper: "max-w-2xl",
      },
      "3xl": {
        wrapper: "max-w-3xl",
      },
      "4xl": {
        wrapper: "max-w-4xl",
      },
      "5xl": {
        wrapper: "max-w-5xl",
      },
      full: {
        wrapper: "max-w-full",
      },
    },
  },
  defaultVariants: {
    isBordered: false,
    isBlurred: false,
    isMenuOpen: false,
    position: "static",
    maxWidth: "full",
  },
})
