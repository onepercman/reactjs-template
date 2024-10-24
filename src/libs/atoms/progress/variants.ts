import { tv } from "tailwind-variants"

export const progress = tv({
  base: "rounded-full border border-line p-1",
  slots: {
    track: "relative h-2 rounded-full",
    range:
      "absolute h-full rounded-full bg-gradient-to-r from-primary to-accent transition-transform",
  },
})
