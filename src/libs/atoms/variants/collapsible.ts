import { tv } from "tailwind-variants"

export const collapsible = tv({
  base: "flex flex-col duration-500",
  slots: {
    trigger:
      "bg-component w-full p-2 rounded inline-flex justify-between gap-2 items-center",
    content: [
      "overflow-hidden",
      "data-[state=open]:animate-collapse",
      "data-[state=closed]:animate-collapse data-[state=closed]:direction-reverse",
    ],
  },
})
