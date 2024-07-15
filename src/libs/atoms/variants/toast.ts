import { tv } from "tailwind-variants"

export const toast = tv({
  base: [
    "border relative border-line bg-component p-4 rounded min-w-64 shadow-lg transition-all duration-300",
    "z-[var(--z-index)]",
    "opacity-[var(--opacity)]",
    "translate-x-[var(--x)]",
    "translate-y-[var(--y)]",
    "h-[var(--height)]",
    "[scale:var(--scale)]",
  ],
  slots: {
    container: "gap-8",
    title: "text-sm mt-0 inline-flex items-center gap-2 pr-6",
    description: "text-xs text-secondary",
    dismiss: "absolute top-2 right-2",
  },
})
