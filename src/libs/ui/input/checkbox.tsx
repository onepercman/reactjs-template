"use client"

import React from "react"
import { CheckboxVariantProps, checkbox } from "./variants"

type BaseCheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">

export interface CheckboxProps extends BaseCheckboxProps, CheckboxVariantProps {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function (
  { className, size, children, ...props },
  ref,
) {
  const _className = checkbox({ size, className })

  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input ref={ref} type="checkbox" className={_className} {...props} />
      {children}
    </label>
  )
})

Checkbox.displayName = "Checkbox"
