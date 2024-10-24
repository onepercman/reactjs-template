import { tv } from "tailwind-variants"

export const combobox = tv({
  base: "",
  slots: {
    trigger: [
      "inline-flex items-center justify-between gap-2 rounded bg-default",
      "h-[var(--button-size)] min-h-[var(--button-size)] min-w-[var(--button-size)]",
      "data-[placeholder-shown]:text-secondary",
    ],
    input: "w-full min-w-6",
    clearTrigger:
      "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-secondary",
    content: [
      "flex w-full flex-col overflow-hidden rounded bg-component p-2 shadow-lg",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    itemGroup: "flex flex-col",
    ItemGroupLabel: "w-full px-2 py-1 text-xs text-secondary",
    item: "relative inline-flex cursor-pointer items-start justify-between gap-2 rounded py-2 pl-3 pr-8 font-medium data-[state=checked]:text-primary hover:bg-foreground/5",
    itemText: "grow",
    itemIndicator:
      "absolute right-2 top-0 h-full items-center text-xs text-primary data-[state=checked]:flex",
  },
  variants: {
    size: {
      xs: {
        trigger: "px-2 text-xs [--button-size:1.25rem]",
        item: "py-1 text-xs",
      },
      sm: {
        trigger: "px-2 text-sm [--button-size:1.5rem]",
        item: "py-1 text-sm",
      },
      md: {
        trigger: "px-4 text-sm [--button-size:2.25rem]",
        item: "text-base",
      },
      lg: { trigger: "px-4 [--button-size:2.75rem]", item: "text-lg" },
    },
    invalid: {
      true: {
        label: "text-error",
        trigger: "border-2 border-error bg-error/10 !text-error",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
