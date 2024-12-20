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
    table: "border-separate border-spacing-1",
    tableHeader: "text-xs font-normal text-secondary",
    tableCellTrigger: [
      "relative inline-flex w-full items-center justify-center rounded px-2 py-1.5 text-xs font-normal",
      "hover:bg-primary/20",
      "data-[in-range]:bg-primary/50",
      "data-[selected]:bg-primary",
      "data-[selected]:hover:bg-primary",
      "data-[disabled]:text-muted",
      "data-[today]:after:content-['']",
      "data-[today]:after:absolute",
      "data-[today]:after:bottom-0",
      "data-[today]:after:w-1",
      "data-[today]:after:h-1",
      "data-[today]:after:rounded-full",
      "data-[today]:after:bg-primary",
    ],
  },
  variants: {},
  defaultVariants: {},
})
