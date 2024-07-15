import { tv } from "tailwind-variants"

export const toast = tv({
  base: [
    "border relative border-line bg-component p-4 rounded min-w-64 shadow-lg transition-all",
    "scale-[calc(1-var(--index)*0.1)]",
    "z-[var(--z-index)]",
    "opacity-[calc(1-var(--index)*0.15)]",
    "translate-x-[var(--x)]",
    "-translate-y-[var(--index)*var(--gap)]",
    "data-[paused]:translate-y-[var(--y)]",
    "data-[paused]:scale-100",
    "data-[paused]:opacity-100",
    "data-[state=open]:animate-in",
    "data-[state=closed]:animate-out",
    "data-[state=open]:slide-in-from-top",
    "data-[state=closed]:slide-out-to-top",
  ],
  slots: {
    container: "gap-8",
    title: "text-sm mt-0 inline-flex items-center gap-2",
    description: "text-xs text-secondary",
    dismiss: "absolute top-2 right-2",
  },
})
