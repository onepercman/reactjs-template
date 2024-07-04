import { tv } from "tailwind-variants"

export const radio = tv({
  base: "input-radio",
  variants: {
    size: {
      md: "h-4 w-4",
      sm: "h-3 w-3",
      lg: "h-5 w-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
})
