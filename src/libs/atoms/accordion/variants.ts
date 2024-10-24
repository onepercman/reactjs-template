import { tv } from "tailwind-variants"

export const accordion = tv({
  base: "",
  slots: {
    item: "flex flex-col",
    itemTrigger:
      "inline-flex w-full items-center justify-between gap-2 rounded",
    itemIndicator: ["transition-all", "data-[state=open]:rotate-180"],
    itemContent: [
      "overflow-hidden !duration-150",
      "data-[state=open]:animate-collapse",
      "data-[state=closed]:animate-collapse data-[state=closed]:direction-reverse",
    ],
  },
})
