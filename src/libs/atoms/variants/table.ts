import { tv } from "tailwind-variants"

export const table = tv({
  base: "w-full overflow-auto rounded text-sm",
  slots: {
    table: "w-full border-separate border-spacing-y-1",
    trHead: "",
    th: "text-secondary px-4 py-2 bg-component first:rounded-l last:rounded-r uppercase text-xs font-bold",
    tr: "group transition-colors group",
    td: "px-4 py-2 transition-all bg-component first:rounded-l last:rounded-r",
  },
  variants: {
    selectionMode: {
      single: { td: "cursor-pointer group-hover:bg-default/70" },
      multiple: { td: "cursor-pointer group-hover:bg-default/70" },
    },
  },
})
