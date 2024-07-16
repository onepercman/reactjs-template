import { tv } from "tailwind-variants"

export const collapsible = tv({
  base: "flex flex-col",
  slots: {
    trigger: "w-full rounded inline-flex justify-between gap-2 items-center",
    content: [
      "overflow-hidden !duration-150",
      "data-[state=open]:animate-collapse",
      "data-[state=closed]:animate-collapse data-[state=closed]:direction-reverse",
    ],
  },
})
