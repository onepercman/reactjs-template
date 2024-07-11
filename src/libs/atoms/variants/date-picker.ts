import { tv } from "tailwind-variants"

export const datePicker = tv({
  base: [
    "bg-component border border-line p-4 shadow rounded",
    "data-[state=open]:animate-in",
    "data-[state=open]:fade-in",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out",
  ],
  slots: {
    viewControl: "inline-flex gap-2 justify-between w-full items-center mb-4",
    header: "text-sm font-semibold text-secondary",
    cell: [
      "w-full hover:bg-primary/20",
      "data-[selected]:bg-primary",
      "data-[disabled]:text-muted",
    ],
  },
  variants: {},
  defaultVariants: {},
})
