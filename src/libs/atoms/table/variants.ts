import { tv } from "tailwind-variants"

export const table = tv({
  base: "w-full overflow-auto text-sm border border-line rounded",
  slots: {
    table: "w-full border-collapse border-spacing-0",
    thead: "",
    tbody: "relative divide-y divide-line text-left",
    th: "text-secondary px-4 py-2 text-xs font-medium border-b border-line",
    tr: "group transition-colors divide-x divide-line",
    td: "px-4 py-2 transition-all data-[selected=true]:bg-default data-[selected=true]:group-hover:bg-default border-t border-line",
  },
  variants: {
    selectionMode: {
      single: { td: "cursor-pointer group-hover:bg-default/70" },
      multiple: { td: "cursor-pointer group-hover:bg-default/70" },
    },
  },
})
