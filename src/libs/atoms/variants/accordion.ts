import { tv } from "tailwind-variants"

export const accordion = tv({
  base: "",
  slots: {
    item: "flex flex-col",
    trigger: "w-full rounded inline-flex justify-between gap-2 items-center",
    indicator: ["transition-all", "data-[state=open]:rotate-180"],
    content: [
      "overflow-hidden !duration-150",
      "data-[state=open]:animate-collapse",
      "data-[state=closed]:animate-collapse data-[state=closed]:direction-reverse",
    ],
  },
})
