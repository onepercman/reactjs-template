import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../utils/className"

export const drawer = cva(cn("fixed z-50 p-2"), {
  variants: {
    side: {
      right: "bottom-0 right-0 top-0 w-full",
      left: "bottom-0 left-0 top-0 w-full",
      top: "left-0 right-0 top-0 h-full",
      bottom: "left-0 right-0 bottom-0 h-full",
    },
  },
  defaultVariants: {
    side: "right",
  },
})

export const drawerTransition = cva("opacity-0", {
  variants: {
    side: {
      right: "translate-x-full",
      left: "-translate-x-full",
      top: "-translate-y-full",
      bottom: "translate-y-full",
    },
  },
  defaultVariants: {
    side: "right",
  },
})

export type DrawerVariantProps = VariantProps<typeof drawer>
