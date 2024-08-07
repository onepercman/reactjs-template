import { tv } from "tailwind-variants"

export const datePicker = tv({
  slots: {
    content: [
      "bg-component border border-line p-2 shadow rounded w-fit",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    control: "inline-flex items-center gap-2",
    viewControl: "inline-flex gap-2 justify-between w-full items-center py-2",
    table: "border-spacing-0",
    tableHeader: "text-xs text-secondary font-normal",
    tableCellTrigger: [
      "text-xs font-normal w-full hover:bg-primary/20",
      "data-[today]:border data-[today]:border-primary",
      "data-[in-range]:bg-primary/50",
      "data-[selected]:bg-primary",
      "data-[disabled]:text-muted",
    ],
  },
  variants: {},
  defaultVariants: {},
})
