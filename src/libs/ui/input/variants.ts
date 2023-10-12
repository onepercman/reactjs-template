import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../utils/className"

export const input = cva("input", {
  variants: {
    size: {
      sm: "size-sm",
      md: "size-md",
      lg: "size-lg",
    },
    variant: {
      filled: "input-filled",
      outlined: "input-outlined",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
})

export const checkbox = cva(
  cn(
    "rounded bg-transparent text-primary",
    "focus:ring focus:ring-primary focus:outline-none",
    "focus:shadow focus:shadow-primary",
    "focus-within:ring focus-within:ring-primary",
    "focus-visible:ring focus-visible:ring-primary",
  ),
  {
    variants: {
      size: {
        md: "h-6 w-6",
        sm: "h-6 w-6",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

export const radio = cva(
  cn(
    "rounded bg-transparent text-primary",
    "focus:ring focus:ring-primary focus:outline-none",
    "focus:shadow focus:shadow-primary",
    "focus-within:ring focus-within:ring-primary",
    "focus-visible:ring focus-visible:ring-primary",
  ),
  {
    variants: {
      size: {
        md: "h-6 w-6",
        sm: "h-6 w-6",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

export const textarea = cva(cn("input input-textarea"), {
  variants: {
    variant: {
      filled: "input-filled",
      outlined: "input-outlined",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
})

export type InputVariantProps = VariantProps<typeof input>

export type CheckboxVariantProps = VariantProps<typeof checkbox>

export type RadioVariantProps = VariantProps<typeof radio>

export type TextareaVariantProps = VariantProps<typeof textarea>
