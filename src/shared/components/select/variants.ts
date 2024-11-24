import { tv } from "tailwind-variants"

export const select = tv({
  base: "",
  slots: {
    trigger: "data-[placeholder-shown]:text-secondary",
    valueText: "grow text-left",
    clearTrigger: "text-secondary",
    indicator: "text-secondary",
    content: [
      "flex w-full flex-col overflow-hidden rounded bg-component p-2 shadow-lg",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    itemGroup: "flex flex-col",
    itemGroupLabel: "w-full px-2 py-1 text-xs text-secondary",
    item: [
      "relative inline-flex cursor-pointer select-none items-start justify-between gap-2 rounded py-2 pl-3 pr-8 font-medium hover:bg-foreground/5",
      "data-[state=checked]:text-primary",
      "data-[disabled]:cursor-not-allowed data-[disabled]:text-muted",
    ],
    itemText: "grow",
    itemIndicator:
      "absolute right-2 top-0 h-full items-center text-xs text-primary data-[state=checked]:flex",
  },
  variants: {
    size: {
      xs: { item: "py-1 text-xs" },
      sm: { item: "py-1 text-sm" },
      md: { item: "text-base" },
      lg: { item: "text-lg" },
    },
    invalid: {
      true: {
        label: "text-error",
        trigger: "border-2 border-error bg-error/10 !text-error",
      },
    },
  },
  defaultVariants: { size: "md" },
})
