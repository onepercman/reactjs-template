import { tv } from "tailwind-variants"

export const table = tv({
  base: "border-line w-full overflow-auto rounded border",
  slots: {
    table: "w-full border-collapse",
    trHead: "divide-line divide-x",
    th: "text-secondary border-line border-b px-4 py-2 font-normal text-sm bg-default",
    tr: "divide-line group divide-x transition-colors group",
    td: "px-4 py-2 transition-all",
  },
  variants: {
    selectionMode: {
      single: { td: "cursor-pointer group-hover:bg-default/70" },
      multiple: { td: "cursor-pointer group-hover:bg-default/70" },
    },
  },
})
