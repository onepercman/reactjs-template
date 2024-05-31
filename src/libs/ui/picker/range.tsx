import { cn } from "@/libs/tailwind-variants"
import { Dayjs } from "dayjs"
import { RangePicker, RangePickerProps } from "rc-picker"
import { RangePickerRef } from "rc-picker/lib/interface"
import defaultLocale from "rc-picker/lib/locale/en_US"
import React from "react"
import { HiArrowCircleRight, HiCalendar } from "react-icons/hi"
import { VariantProps, tv } from "tailwind-variants"
import defaultConfig from "./dayjs-timezone"

const datePickerVariants = tv({
  base: "input-group input",
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

export const Range = React.forwardRef<
  RangePickerRef,
  InternalType & VariantProps<typeof datePickerVariants>
>(function ({ size, variant, className, ...props }, ref) {
  return (
    <RangePicker
      ref={ref}
      locale={defaultLocale}
      generateConfig={defaultConfig}
      separator={<HiArrowCircleRight className="text-secondary" />}
      suffixIcon={<HiCalendar role="button" className="text-secondary" />}
      className={cn(datePickerVariants({ size, variant, className }))}
      {...props}
    />
  )
})

Range.displayName = "Range"
