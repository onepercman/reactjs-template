import { tv } from "tailwind-variants"

export const select = tv({
  base: "flex flex-col gap-1 w-fit",
  slots: {
    label: "text-sm text-secondary",
    trigger: "min-w-full justify-between",
    clear: "text-secondary text-xs flex-none",
    list: "flex flex-col border border-line w-full rounded data-[state=open]:opacity-100 data-[state=false]:pointer-events-none opacity-0 transition-opacity overflow-hidden bg-component shadow-lg p-1",
    group: "flex flex-col",
    groupLabel: "w-full px-2 py-1 border-y border-line text-xs text-secondary",
    item: "inline-flex relative gap-2 justify-between items-start cursor-pointer hover:bg-default pl-4 py-2 pr-8 rounded",
    itemText: "grow",
    itemIndicator: "text-primary h-full absolute top-1.5 right-3",
  },
  variants: {
    invalid: {
      true: {
        label: "text-error",
        trigger: "bg-error/10 border-error border-2 !text-error",
      },
    },
  },
})
