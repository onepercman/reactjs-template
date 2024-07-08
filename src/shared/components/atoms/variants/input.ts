import { tv } from "tailwind-variants"

export const input = tv({
  base: "border-transparent rounded px-2 transition-all text-ellipsis inline-flex items-center overflow-hidden cursor-text gap-2 focus-within:border-primary border-2",
  slots: {
    input:
      "grow bg-transparent border-transparent focus:outline-none focus:ring-transparent p-0 self-stretch overflow-hidden text-ellipsis h-full placeholder:text-secondary",
    addonBefore: "rounded-r-none",
    addonAfter: "rounded-l-none",
  },
  variants: {
    size: {
      xs: "h-[1.5rem] min-h-[1.5rem] min-w-[1.5rem] px-2 text-xs",
      sm: "h-[2rem] min-h-[2rem] min-w-[2rem] px-2 text-sm",
      md: "h-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] px-2",
      lg: "h-[3rem] min-h-[3rem] min-w-[3rem] px-4",
    },
    variant: {
      filled: "bg-default",
      outlined: "border-line",
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
