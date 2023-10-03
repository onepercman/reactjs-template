"use client"

import React from "react"
import { cn } from "../utils/className"
import { textarea, TextareaVariantProps } from "./variants"

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
