import { cva, VariantProps } from "class-variance-authority"
import { Dayjs } from "dayjs"
import Picker, { PickerProps, PickerRef } from "rc-picker"
import defaultLocale from "rc-picker/lib/locale/en_US"
import React from "react"
import { HiCalendar } from "react-icons/hi"
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

type InternalType = Omit<PickerProps<Dayjs>, OmitType>

export type DatePickerProps = InternalType & VariantProps<typeof datePickerVariants>

export const DatePicker = React.forwardRef<PickerRef, DatePickerProps>(function (
  { size, variant, className, ...props },
  ref,
) {
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
})

DatePicker.displayName = "DatePicker"
