import { tv } from "tailwind-variants"

export const table = tv({
  base: "overflow-auto rounded text-xs",
  slots: {
    table: "w-full border-separate border-spacing-y-1",
    head: "",
    body: "relative",
    column: "bg-default px-4 py-2 font-semibold first:rounded-l last:rounded-r",
    row: "group",
    cell: "bg-component px-4 py-2 font-normal first:rounded-l last:rounded-r",
  },
  variants: {
    size: {
      sm: {
        base: "text-xs",
        column: "px-2 py-1",
        cell: "px-2 py-1",
      },
      md: {
        base: "text-sm",
        column: "px-4 py-1.5",
        cell: "px-4 py-1.5",
      },
      lg: {
        base: "text-base",
        column: "px-6 py-2",
        cell: "px-6 py-2",
      },
    },
    highlightRow: {
      true: {
        cell: "cursor-pointer transition-colors group-hover:bg-default",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
