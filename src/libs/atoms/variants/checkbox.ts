import { tv } from "tailwind-variants"

export const checkbox = tv({
  base: "inline-flex items-center gap-2 cursor-pointer",
  slots: {
    label: "",
    control: [
      "rounded flex border-2 border-line hover:border-primary transition-colors text-primary",
      "data-[state=checked]:border-primary",
    ],
  },
  variants: {
    size: {
      xs: { label: "text-xs", control: "h-4 w-4 text-xs" },
      sm: { label: "text-sm", control: "h-5 w-5 text-sm" },
      md: { label: "text-base", control: "h-6 w-6 text-base" },
      lg: { label: "text-lg", control: "h-8 w-8 text-lg" },
    },
    indeterminate: {
      true: {
        control:
          "data-[state=checked]:bg-primary data-[state=checked]:text-white",
      },
    },
    placement: {
      head: "flex-row",
      tail: "flex-row-reverse",
    },
  },
  defaultVariants: {
    size: "md",
    placement: "head",
    variant: "outlined",
    color: "primary",
  },
})
