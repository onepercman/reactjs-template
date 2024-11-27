import { tv } from "tailwind-variants"

export const datePicker = tv({
  slots: {
    content: [
      "w-fit rounded border border-line bg-component p-2 shadow",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    control: "inline-flex items-center gap-2",
    trigger: "inline-flex items-center gap-2",
    viewControl: "inline-flex w-full items-center justify-between gap-2 py-2",
    table: "border-spacing-0",
    tableHeader: "text-xs font-normal text-secondary",
    tableCellTrigger: [
      "w-full text-xs font-normal hover:bg-primary/20",
      "data-[today]:border data-[today]:border-primary",
      "data-[in-range]:bg-primary/50",
      "data-[selected]:bg-primary",
      "data-[disabled]:text-muted",
    ],
  },
  variants: {},
  defaultVariants: {},
})
