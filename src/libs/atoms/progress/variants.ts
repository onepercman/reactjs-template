import { tv } from "tailwind-variants"

export const progress = tv({
  base: "p-1 border border-line rounded-full",
  slots: {
    track: "relative rounded-full h-2",
    range:
      "rounded-full bg-gradient-to-r from-primary to-accent h-full absolute transition-transform",
  },
})
