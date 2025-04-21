import { Spacer as BaseSpacer, extendVariants } from "@heroui/react"

export const Spacer = extendVariants(BaseSpacer, {
  variants: {
    size: {
      xs: "h-1 w-1",
      sm: "h-2 w-2",
      md: "h-4 w-4",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    },
    isDivider: { true: "bg-default-200" },
  },
  defaultVariants: { size: "md", orientation: "vertical", isDivider: false },
})
