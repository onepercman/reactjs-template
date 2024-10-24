import { tv } from "tailwind-variants"

export const toast = tv({
  base: [
    "relative min-w-64 rounded border border-line bg-component p-4 shadow-lg transition-all duration-300",
    "z-[var(--z-index)]",
    "opacity-[var(--opacity)]",
    "translate-x-[var(--x)]",
    "translate-y-[var(--y)]",
    "h-[var(--height)]",
    "[scale:var(--scale)]",
  ],
  slots: {
    container: "gap-8",
    title: "mt-0 inline-flex items-center gap-2 pr-6 text-sm",
    description: "text-xs text-secondary",
    dismiss: "absolute right-2 top-2",
  },
})
