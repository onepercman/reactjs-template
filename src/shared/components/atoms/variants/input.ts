import { tv } from "tailwind-variants"

export const input = tv({
  base: "flex flex-col gap-1 group w-fit",
  slots: {
    label: "text-xs space-y-2 text-secondary",
    group:
      "border-transparent rounded px-2 transition-all text-ellipsis inline-flex items-center overflow-hidden cursor-text gap-2 focus-within:border-primary border-2",
    input:
      "grow bg-transparent border-transparent focus:outline-none focus:ring-transparent p-0 self-stretch overflow-hidden text-ellipsis h-full placeholder:text-secondary",
    addonBefore: "rounded-r-none",
    addonAfter: "rounded-l-none",
  },
  variants: {
    size: {
      xs: { group: "h-[1.5rem] min-h-[1.5rem] min-w-[1.5rem] px-2 text-xs" },
      sm: { group: "h-[2rem] min-h-[2rem] min-w-[2rem] px-2 text-sm" },
      md: { group: "h-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] px-2" },
      lg: { group: "h-[3rem] min-h-[3rem] min-w-[3rem] px-4" },
    },
    variant: {
      filled: { group: "bg-default" },
      outlined: { group: "border-line" },
    },
    invalid: {
      true: {
        group:
          "border-2 border-error text-error bg-error/10 focus-within:border-error-600",
        label: "text-error",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
})
