import { tv } from "tailwind-variants"

export const checkbox = tv({
  base: "inline-flex cursor-pointer items-center gap-2",
  slots: {
    label: "",
    control: [
      "flex rounded border-2 border-line text-primary transition-colors hover:border-primary",
      "data-[state=checked]:border-primary",
    ],
    indicator: "m-auto",
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
