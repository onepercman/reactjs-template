"use client"

import { styled } from "react-tvcx"
import { tv } from "tailwind-variants"

export const badge = tv({
  base: [
    "inline-flex items-center gap-1 rounded-full bg-opacity-10 text-center font-medium",
    "min-h-[var(--badge-size)] min-w-[var(--badge-size)]",
  ],
  variants: {
    size: {
      xs: "px-2 py-1 text-xs [--badge-size:1.5rem]",
      sm: "px-3 py-2 text-sm [--badge-size:2rem]",
      md: "px-4 py-2 text-sm [--badge-size:2.5rem]",
      lg: "px-4 py-2 [--badge-size:2.75rem]",
    },
    color: {
      default: "bg-default text-foreground",
      primary: "bg-primary text-primary",
      success: "bg-success text-success",
      error: "bg-error text-error",
      warning: "bg-warning text-warning",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "default",
  },
})

export const Badge = styled("span", badge)

Badge.displayName = "Badge"

export default Badge
