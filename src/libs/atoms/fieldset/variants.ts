import { tv } from "tailwind-variants"

export const fieldset = tv({
  base: "flex flex-col gap-2",
  slots: {
    label: "font-medium",
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
        label: "after:ml-1 after:inline after:text-error after:content-['*']",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
