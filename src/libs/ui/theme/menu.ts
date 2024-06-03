import { tv } from "tailwind-variants"

export const menu = tv({
  slots: {
    list: "flex flex-col border border-line w-full rounded overflow-hidden bg-component shadow-lg p-1 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out outline-none",
    group: "flex flex-col",
    groupLabel: "w-full px-2 py-1 text-xs text-secondary",
    item: "inline-flex relative gap-2 justify-between items-center cursor-pointer hover:bg-default px-3 py-2 rounded",
    itemIndicator: "h-full absolute right-2 top-0 data-[state=checked]:flex items-center",
    separator: "w-full h-px border-line my-1",
  },
  variants: {
    size: {
      xs: { item: "text-xs py-1" },
      sm: { item: "text-sm py-1" },
      md: { item: "text-base" },
      lg: { item: "text-lg" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
