"use client"

import { cva, VariantProps } from "class-variance-authority"
import { Moment } from "moment-timezone"
import Picker from "rc-picker"
import defaultConfig from "rc-picker/lib/generate/moment"
import defaultLocale from "rc-picker/lib/locale/en_US"
import { PickerBaseProps, PickerDateProps, PickerTimeProps } from "rc-picker/lib/Picker"
import React from "react"
import { HiCalendar } from "react-icons/hi"
import { cn } from "../utils/className"

const datePickerVariants = cva("input-group input", {
  variants: {
    size: {
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
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

type OmitType = "locale" | "generateConfig" | "suffixIcon"

type InternalType =
  | Omit<PickerBaseProps<Moment>, OmitType>
  | Omit<PickerDateProps<Moment>, OmitType>
  | Omit<PickerTimeProps<Moment>, OmitType>

export type DatePickerProps = InternalType & VariantProps<typeof datePickerVariants>

export const DatePicker = React.forwardRef<Picker<Moment>, DatePickerProps>(
  ({ size, variant, className, ...props }, ref) => {
    return (
      <Picker
        ref={ref}
        locale={defaultLocale}
        generateConfig={defaultConfig}
        suffixIcon={<HiCalendar role="button" className="text-muted" />}
        className={cn(datePickerVariants({ size, variant, className }))}
        {...props}
      />
    )
  },
)

DatePicker.displayName = "DatePicker"
