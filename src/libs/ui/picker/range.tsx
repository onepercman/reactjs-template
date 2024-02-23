import { cva, VariantProps } from "class-variance-authority"
import { Dayjs } from "dayjs"
import { PickerRef, RangePicker, RangePickerProps } from "rc-picker"
import defaultLocale from "rc-picker/lib/locale/en_US"
import React from "react"
import { HiArrowCircleRight, HiCalendar } from "react-icons/hi"
import { cn } from "../utils/className"
import defaultConfig from "./dayjs-timezone"

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

type InternalType = Omit<RangePickerProps<Dayjs>, OmitType>

export const Range = React.forwardRef<PickerRef, InternalType & VariantProps<typeof datePickerVariants>>(function (
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
