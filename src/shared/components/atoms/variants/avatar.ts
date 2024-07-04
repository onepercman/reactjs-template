import { tv } from "tailwind-variants"

export const avatar = tv({
  base: "rounded-full aspect-square flex overflow-hidden flex-none relative",
  slots: {
    fallback: "m-auto",
    image: "object-cover inset-0",
  },
  variants: {
    size: {
      xs: { base: "w-6 h-6" },
      sm: { base: "w-10 h-10" },
      md: { base: "w-12 h-12" },
      lg: { base: "w-20 h-20" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
