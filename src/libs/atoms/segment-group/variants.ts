import { tv } from "tailwind-variants"

export const segmentGroup = tv({
  base: "relative inline-flex items-center gap-2",
  slots: {
    item: "relative cursor-pointer select-none text-secondary transition-colors data-[state=checked]:text-primary data-[state=checked]:[text-shadow:_0px_0px_10px_rgba(var(--tw-schemes-primary),0.50)] hover:text-foreground",
    indicator: "",
  },
  variants: {
    size: {
      sm: {
        item: "px-2 py-1 text-sm",
      },
      md: {
        item: "px-4 py-2 text-base",
      },
      lg: {
        item: "px-3 py-2 text-base",
      },
    },
    variant: {
      solid: {
        base: "rounded bg-line p-1",
        indicator:
          "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded bg-default",
      },
      underlined: {
        base: "",
        indicator:
          "absolute bottom-0 left-[var(--left)] h-1 w-[var(--width)] rounded bg-foreground",
      },
      bordered: {
        base: "rounded border border-line p-1",
        indicator:
          "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded bg-default",
      },
      light: {
        base: "",
        indicator:
          "absolute bottom-0 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded bg-default",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
})
