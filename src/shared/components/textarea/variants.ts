import { tv } from "tailwind-variants"

export const textarea = tv({
  base: [
    "inline-flex cursor-text items-center gap-2 overflow-hidden text-ellipsis rounded border-2 px-2 py-2 transition-all",
    "focus-within:border-primary",
  ],
  slots: {
    textarea: [
      "my-auto h-fit grow self-stretch text-ellipsis border-transparent bg-transparent p-0",
      "focus:outline-none focus:ring-transparent",
    ],
    addonBefore: "rounded-r-none",
    addonAfter: "rounded-l-none",
  },
  variants: {
    size: {
      xs: "min-h-[1.5rem] min-w-[1.5rem] px-2 text-xs",
      sm: "min-h-[2rem] min-w-[2rem] px-2 text-sm",
      md: "min-h-[2.5rem] min-w-[2.5rem] px-2",
      lg: "min-h-[3rem] min-w-[3rem] px-4",
    },
    variant: {
      filled: "border-transparent bg-default",
      outlined: "border-2 border-line",
    },
    invalid: {
      true: {
        base: "border-2 border-error bg-error/10 text-error focus-within:border-error-600",
        label: "text-error",
      },
    },
    autoSize: {
      true: { textarea: "resize-none" },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
})
