import { tv } from "tailwind-variants"

export const input = tv({
  base: [
    "inline-flex cursor-text items-center gap-2 overflow-hidden text-ellipsis rounded border-2 border-transparent px-2 transition-all focus-within:border-primary",
    "h-[var(--input-size)] min-h-[var(--input-size)] min-w-[var(--input-size)] px-2 text-xs",
  ],
  slots: {
    input: [
      "h-full grow self-stretch overflow-hidden text-ellipsis border-transparent bg-transparent p-0",
      "placeholder:text-muted autofill:[-webkit-background-clip:text] focus:outline-none focus:ring-transparent",
    ],
    addonBefore: "rounded-r-none",
    addonAfter: "rounded-l-none",
  },
  variants: {
    size: {
      xs: "px-2 text-xs [--input-size:1.25rem]",
      sm: "px-2 text-sm [--input-size:1.5rem]",
      md: "px-4 text-sm [--input-size:2.25rem]",
      lg: "px-4 [--input-size:2.75rem]",
    },
    variant: {
      filled: "bg-default",
      outlined: "border-line",
      blur: "bg-default/20 backdrop-blur",
    },
    invalid: {
      true: {
        base: "border-2 border-error bg-error/10 text-error focus-within:border-error-600",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outlined",
  },
})
