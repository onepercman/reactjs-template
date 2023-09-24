"use client"

import React from "react"
import { ControllerFieldState, ControllerRenderProps, UseFormStateReturn } from "react-hook-form"
import { cn } from "../utils/className"

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement
  label?: string
  mode?: "vertical" | "horizontal"
  customField?: boolean
  state?: {
    field: ControllerRenderProps<any, any>
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<any>
  }
  required?: boolean | string
}

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(function (
  { className, children, label, mode = "vertical", state, customField = false, required, ...props },
  ref,
) {
  const fieldProps = customField ? {} : { ...state?.field, isError: !!state?.fieldState.error?.message }

  return (
    <div ref={ref} className={cn("flex", mode === "vertical" ? "flex-col" : "flex-row gap-3", className)} {...props}>
      {label && (
        <label className="text-muted text-xs leading-10">
          {label}{" "}
          {required && (
            <span className="text-2xs text-error">{typeof required === "boolean" ? "(*)" : `(${required})`}</span>
          )}
        </label>
      )}
      <div className="flex flex-col gap-2">
        {children &&
          React.cloneElement(children, {
            ...fieldProps,
          })}
        <div
          className={cn(
            "text-error text-xs transition-opacity",
            state?.fieldState?.error?.message ? "opacity-100" : "opacity-0",
          )}
        >
          {state?.fieldState?.error?.message}
        </div>
      </div>
    </div>
  )
})

FormItem.displayName = "FormItem"
