import { tv } from "tailwind-variants"

export const tabs = tv({
  base: "",
  slots: {
    list: "relative inline-flex items-center gap-2",
    trigger:
      "relative select-none text-secondary transition-colors data-[selected]:text-primary data-[selected]:[text-shadow:_0px_0px_10px_rgba(var(--tw-schemes-primary),0.50)] hover:text-foreground",
    indicator: "",
    content: "",
  },
  variants: {
    size: {
      sm: {
        trigger: "px-2 py-1 text-sm",
      },
      md: {
        trigger: "px-4 py-2 text-base",
      },
      lg: {
        trigger: "px-3 py-2 text-base",
      },
    },
    variant: {
      solid: {
        list: "rounded bg-line p-1",
        indicator:
          "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded bg-default",
      },
      underlined: {
        list: "",
        indicator:
          "absolute bottom-0 left-[var(--left)] h-1 w-[var(--width)] rounded bg-foreground",
      },
      bordered: {
        list: "rounded border border-line p-1",
        indicator:
          "absolute bottom-1 left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded bg-default",
      },
      light: {
        list: "",
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
