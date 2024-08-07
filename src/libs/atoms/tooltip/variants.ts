import { tv } from "tailwind-variants"

export const tooltip = tv({
  slots: {
    content: [
      "px-3 py-2 bg-component shadow-lg rounded border border-line z-[var(--z-index)]",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    arrowTip: "!bg-component border-line border-l border-t",
  },
  variants: {
    size: {
      sm: { content: "text-xs p-1" },
      md: { content: "text-sm px-2 py-1" },
      lg: { content: "text-base px-3 py-2" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
