import { tv } from "tailwind-variants"

export const table = tv({
  base: "w-full overflow-auto rounded text-sm",
  slots: {
    table: "w-full border-separate border-spacing-y-1",
    thead: "",
    tbody: "relative divide-y divide-line text-left",
    trHead: "",
    th: "text-secondary px-4 py-2 bg-component first:rounded-l last:rounded-r uppercase text-xs font-bold",
    tr: "group transition-colors",
    td: "px-4 py-2 transition-all bg-component first:rounded-l last:rounded-r data-[selected=true]:bg-default data-[selected=true]:group-hover:bg-default",
  },
  variants: {
    selectionMode: {
      single: { tr: "cursor-pointer", td: "group-hover:bg-default/70" },
      multiple: { tr: "cursor-pointer", td: "group-hover:bg-default/70" },
    },
  },
})
