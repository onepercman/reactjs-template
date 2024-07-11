import { tv } from "tailwind-variants"

export const input = tv({
  base: [
    "border-transparent rounded px-2 transition-all text-ellipsis inline-flex items-center overflow-hidden cursor-text gap-2 focus-within:border-primary border-2",
    "h-[var(--input-size)] min-h-[var(--input-size)] min-w-[var(--input-size)] px-2 text-xs",
  ],
  slots: {
    input:
      "grow bg-transparent border-transparent focus:outline-none focus:ring-transparent p-0 self-stretch overflow-hidden text-ellipsis h-full placeholder:text-muted",
    addonBefore: "rounded-r-none",
    addonAfter: "rounded-l-none",
  },
  variants: {
    size: {
      xs: "[--input-size:1.25rem] px-2 text-xs",
      sm: "[--input-size:1.5rem] px-2 text-sm",
      md: "[--input-size:2.25rem] px-4 text-sm",
      lg: "[--input-size:2.75rem] px-4",
    },
    variant: {
      filled: "bg-default",
      outlined: "border-line",
      blur: "bg-default/20 backdrop-blur",
    },
    invalid: {
      true: {
        base: "border-2 border-error text-error bg-error/10 focus-within:border-error-600",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
})
