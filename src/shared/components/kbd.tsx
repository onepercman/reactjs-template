"use client"

import { styled } from "react-tvcx"
import { tv } from "tailwind-variants"

export const kbd = tv({
  base: [
    "inline-flex items-center gap-1 rounded border border-line bg-component text-center font-medium shadow-[0_1px_0_white]",
    "min-h-[var(--badge-size)] min-w-[var(--badge-size)]",
  ],
  variants: {
    size: {
      xs: "px-2 py-1 text-xs [--badge-size:1.5rem]",
      sm: "px-3 py-2 text-sm [--badge-size:2rem]",
      md: "px-4 py-2 text-sm [--badge-size:2.5rem]",
      lg: "px-4 py-2 [--badge-size:2.75rem]",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "default",
  },
})

export const Kbd = styled("span", kbd)

Kbd.displayName = "Kbd"

export default Kbd
