import { tv } from "tailwind-variants"

export const accordion = tv({
  base: "",
  slots: {
    item: "flex flex-col",
    itemTrigger: "w-full rounded inline-flex justify-between gap-2 items-center",
    itemIndicator: ["transition-all", "data-[state=open]:rotate-180"],
    itemContent: [
      "overflow-hidden !duration-150",
      "data-[state=open]:animate-collapse",
      "data-[state=closed]:animate-collapse data-[state=closed]:direction-reverse",
    ],
  },
})
