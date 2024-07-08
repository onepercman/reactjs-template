import { tv } from "tailwind-variants"

export const field = tv({
  base: "flex flex-col gap-1",
  slots: {
    label: "text-sm",
    errorText: "text-xs text-error",
    helperText: "",
  },
  variants: {
    size: {
      xs: { label: "text-xs" },
      sm: { label: "text-sm" },
      md: { label: "text-base" },
      lg: { label: "text-lg" },
    },
    invalid: {
      true: {
        label: "text-error",
      },
    },
    required: {
      true: {
        label: "after:content-['*'] after:inline after:text-error after:ml-1",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
