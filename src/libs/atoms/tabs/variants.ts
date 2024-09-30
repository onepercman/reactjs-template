import { tv } from "tailwind-variants"

export const tabs = tv({
  base: "",
  slots: {
    list: "inline-flex items-center gap-2 relative",
    trigger:
      "relative text-secondary data-[selected]:text-primary hover:text-foreground transition-colors select-none data-[selected]:[text-shadow:_0px_0px_10px_rgba(var(--tw-schemes-primary),0.50)]",
    indicator: "",
    content: "",
  },
  variants: {
    size: {
      sm: {
        trigger: "text-sm px-2 py-1",
      },
      md: {
        trigger: "text-base px-4 py-2",
      },
      lg: {
        trigger: "text-base px-3 py-2",
      },
    },
    variant: {
      solid: {
        list: "rounded p-1 bg-line",
        indicator:
          "absolute left-[var(--left)] w-[var(--width)] bottom-1 h-[var(--height)] bg-default rounded",
      },
      underlined: {
        list: "",
        indicator:
          "absolute left-[var(--left)] w-[var(--width)] bottom-0 h-1 bg-foreground rounded",
      },
      bordered: {
        list: "rounded p-1 border border-line",
        indicator:
          "absolute left-[var(--left)] w-[var(--width)] bottom-1 h-[var(--height)] bg-default rounded",
      },
      light: {
        list: "",
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
