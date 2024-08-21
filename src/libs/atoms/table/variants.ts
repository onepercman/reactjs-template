import { tv } from "tailwind-variants"

export const table = tv({
  base: "overflow-auto rounded text-xs",
  slots: {
    table: "w-full border-spacing-y-1 border-separate",
    head: "",
    body: "relative",
    column: "bg-default font-semibold px-4 py-2 first:rounded-l last:rounded-r",
    row: "group",
    cell: "px-4 py-2 first:rounded-l last:rounded-r font-normal bg-component",
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
        cell: "transition-colors group-hover:bg-default cursor-pointer",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
