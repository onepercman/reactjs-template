import { cn } from "@/libs/tailwind-variants"
import React from "react"
import { VariantProps, tv } from "tailwind-variants"

const textarea = tv({
  base: "input input-textarea",
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

type TextareaVariantProps = VariantProps<typeof textarea>
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, TextareaVariantProps {
  isError?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function (
  { className, variant, isError, ...props },
  ref,
) {
  return <textarea ref={ref} className={cn(textarea({ variant, className }), isError && "state-error")} {...props} />
})

Textarea.displayName = "Textarea"
