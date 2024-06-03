import { Input, InputProps } from "@/libs/ui/input"
import React from "react"

const specialSymbolsRegex = /[.*+?^${}()|[\]\\]/g
const currencyRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`)

function transformToNumber(value: string): string {
  const transformComma = value.replace(/,/g, ".")
  const escapeRegExp = transformComma.replace(specialSymbolsRegex, "\\$&")
  if (transformComma === "" || currencyRegex.test(escapeRegExp)) {
    return transformComma
  }
  return ""
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputProps>(
  function ({ ...props }, ref) {
    return (
      <Input ref={ref} type="text" transform={transformToNumber} {...props} />
    )
  },
)

InputNumber.displayName = "InputNumber"
