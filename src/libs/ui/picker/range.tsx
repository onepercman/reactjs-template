"use client"

import { cva, VariantProps } from "class-variance-authority"
import { Moment } from "moment-timezone"
import { RangePicker } from "rc-picker"
import defaultConfig from "rc-picker/lib/generate/moment"
import defaultLocale from "rc-picker/lib/locale/en_US"
import { RangePickerBaseProps, RangePickerDateProps, RangePickerTimeProps } from "rc-picker/lib/RangePicker"
import React from "react"
import { HiArrowCircleRight, HiCalendar } from "react-icons/hi"
import { cn } from "../utils/className"

const datePickerVariants = cva("input-group input", {
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

type OmitType = "locale" | "generateConfig" | "suffixIcon"

type InternalType =
  | Omit<RangePickerBaseProps<Moment>, OmitType>
  | Omit<RangePickerDateProps<Moment>, OmitType>
  | Omit<RangePickerTimeProps<Moment>, OmitType>

export type RangePickerProps = InternalType & VariantProps<typeof datePickerVariants>

export const Range = React.forwardRef<RangePicker<Moment>, RangePickerProps>(function (
  { size, variant, className, ...props },
  ref,
) {
  return (
    <RangePicker
      ref={ref}
      locale={defaultLocale}
      generateConfig={defaultConfig}
      separator={<HiArrowCircleRight className="text-muted" />}
      suffixIcon={<HiCalendar role="button" className="text-muted" />}
      className={cn(datePickerVariants({ size, variant, className }))}
      {...props}
    />
  )
})

Range.displayName = "Range"
