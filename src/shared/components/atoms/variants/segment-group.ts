import { tv } from "tailwind-variants"

export const segmentGroup = tv({
  base: "inline-flex items-center gap-2 relative",
  slots: {
    item: "relative text-secondary data-[selected]:text-foreground hover:text-foreground transition-colors cursor-pointer select-none",
    indicator: "",
  },
  variants: {
    size: {
      sm: {
        item: "text-sm px-2 py-1",
      },
      md: {
        item: "text-base px-2 py-1",
      },
      lg: {
        item: "text-base px-3 py-2",
      },
    },
    variant: {
      solid: {
        base: "rounded p-1 bg-line",
        indicator:
          "absolute left-[var(--left)] w-[var(--width)] bottom-1 h-[var(--height)] bg-default rounded",
      },
      underlined: {
        base: "",
        indicator:
          "absolute left-[var(--left)] w-[var(--width)] bottom-0 h-1 bg-foreground rounded",
      },
      bordered: {
        base: "rounded p-1 border border-line",
        indicator:
          "absolute left-[var(--left)] w-[var(--width)] bottom-1 h-[var(--height)] bg-default rounded",
      },
      light: {
        base: "",
        indicator:
          "absolute left-[var(--left)] w-[var(--width)] bottom-0 h-[var(--height)] bg-default rounded",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
})
