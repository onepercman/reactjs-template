import { ScrollShadow as BaseScrollShadow, extendVariants } from "@heroui/react"

export const ScrollShadow = extendVariants(BaseScrollShadow, {
  variants: {
    size: {
      sm: "h-32",
      md: "h-48",
      lg: "h-64",
    },
    orientation: {
      horizontal: "overflow-x-auto",
      vertical: "overflow-y-auto",
    },
    hideScrollBar: {
      true: "scrollbar-hide",
    },
    isEnabled: {
      true: "scroll-shadow",
    },
  },
  defaultVariants: {
    size: "md",
    orientation: "vertical",
    hideScrollBar: false,
    isEnabled: true,
  },
})
