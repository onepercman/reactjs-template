import { tv } from "tailwind-variants"

export const toast = tv({
  base: [
    "border relative border-line bg-component p-4 rounded min-w-64 shadow-lg transition-all",
    "translate-x-[var(--x)]",
    "-translate-y-[var(--delta)]",
    "data-[paused]:translate-y-[var(--y)]",
    "scale-[var(--scale)]",
    "data-[paused]:scale-100",
    "opacity-[var(--opacity)]",
    "data-[paused]:opacity-100",
  ],
  slots: {
    container: "gap-8",
    title: "text-sm mt-0 inline-flex items-center gap-2",
    description: "text-xs text-secondary",
    dismiss: "absolute top-2 right-2",
  },
})
