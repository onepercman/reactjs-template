"use client"

import { Regex } from "@/utils/regex"
import React from "react"
import { Input, InputProps } from "./input"

function transformToNumber(value: string): string {
  const transformComma = value.replace(/,/g, ".")
  const escapeRegExp = transformComma.replace(Regex.specialSymbols, "\\$&")
  if (transformComma === "" || Regex.currency.test(escapeRegExp)) {
    return transformComma
  }
  return ""
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <Input ref={ref} type="text" transform={transformToNumber} {...props} />
})

InputNumber.displayName = "InputNumber"
