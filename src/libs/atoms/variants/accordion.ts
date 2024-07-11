import { tv } from "tailwind-variants"

export const accordion = tv({
  base: "flex flex-col gap-2 border border-line p-2 rounded duration-500",
  slots: {
    item: "flex flex-col duration-500",
    trigger:
      "bg-component w-full p-2 rounded inline-flex justify-between gap-2 items-center",
    indicator: ["transition-all", "data-[state=open]:rotate-180"],
    content: [
      "overflow-hidden",
      "data-[state=open]:animate-heightIn",
      "data-[state=closed]:animate-heightOut",
    ],
  },
})
