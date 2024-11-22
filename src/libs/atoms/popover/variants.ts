import { tv } from "tailwind-variants"

export const popover = tv({
  slots: {
    content: [
      "z-[var(--z-index)] rounded border border-line bg-component px-3 py-2 shadow-lg",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    arrow: "",
    arrowTip: "border-l border-t border-line !bg-component",
  },
  variants: {
    size: {
      sm: { content: "p-1 text-xs" },
      md: { content: "px-2 py-1 text-sm" },
      lg: { content: "px-3 py-2 text-base" },
    },
    arrowSize: {
      md: { arrow: "[--arrow-size:0.5rem]" },
    },
  },
  defaultVariants: {
    size: "md",
    arrowSize: "md",
  },
})
