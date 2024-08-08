import { tv } from "tailwind-variants"

export const menu = tv({
  slots: {
    content: [
      "flex flex-col w-full rounded overflow-hidden bg-component shadow-lg p-2 outline-none",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    itemGroup: "flex flex-col",
    itemGroupLabel: "w-full px-2 py-1 text-xs text-secondary",
    item: "inline-flex relative gap-2 justify-between items-center cursor-pointer hover:bg-foreground/5 px-3 py-2 rounded font-medium",
    itemIndicator: ["h-full absolute right-2 top-0 items-center", "data-[state=checked]:flex"],
    separator: "w-full h-px border-line my-1",
  },
  variants: {
    size: {
      xs: { item: "text-xs py-1" },
      sm: { item: "text-sm py-1" },
      md: { item: "text-sm" },
      lg: { item: "text-lg" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
