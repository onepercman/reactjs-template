import { tv } from "tailwind-variants"

export const textarea = tv({
  base: "group flex flex-col gap-1",
  slots: {
    group: [
      "inline-flex cursor-text items-center gap-2 overflow-hidden text-ellipsis rounded border-2 px-2 py-2 transition-all",
      "focus-within:border-primary",
    ],
    textarea: [
      "my-auto h-fit grow self-stretch text-ellipsis border-transparent bg-transparent p-0",
      "focus:outline-none focus:ring-transparent",
    ],
    addonBefore: "rounded-r-none",
    addonAfter: "rounded-l-none",
  },
  variants: {
    size: {
      xs: { group: "min-h-[1.5rem] min-w-[1.5rem] px-2 text-xs" },
      sm: { group: "min-h-[2rem] min-w-[2rem] px-2 text-sm" },
      md: { group: "min-h-[2.5rem] min-w-[2.5rem] px-2" },
      lg: { group: "min-h-[3rem] min-w-[3rem] px-4" },
    },
    variant: {
      filled: { group: "border-transparent bg-default" },
      outlined: { group: "border-2 border-line" },
    },
    invalid: {
      true: {
        group:
          "border-2 border-error bg-error/10 text-error focus-within:border-error-600",
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
