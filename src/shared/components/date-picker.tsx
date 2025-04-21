import { DatePicker as BaseDatePicker, extendVariants } from "@heroui/react"

export const DatePicker = extendVariants(BaseDatePicker, {
  slots: {
    base: "",
    input: "",
    label: "",
    description: "",
    errorMessage: "",
    calendar: "",
    calendarContent: "",
    calendarHeader: "",
    calendarTitle: "",
    calendarBody: "",
    calendarGrid: "",
    calendarCell: "",
    calendarCellTrigger: "",
  },
  variants: {
    size: {
      sm: {
        input: "px-3 h-8 text-tiny",
        label: "text-tiny",
        description: "text-tiny",
        errorMessage: "text-tiny",
        calendarCell: "h-7 text-tiny",
      },
      md: {
        input: "px-4 h-10 text-small",
        label: "text-small",
        description: "text-small",
        errorMessage: "text-small",
        calendarCell: "h-8 text-small",
      },
      lg: {
        input: "px-6 h-12 text-medium",
        label: "text-medium",
        description: "text-medium",
        errorMessage: "text-medium",
        calendarCell: "h-9 text-medium",
      },
    },
    color: {
      default: {
        input: "border-default-400",
        calendarCellTrigger:
          "data-[selected=true]:bg-default data-[selected=true]:text-default-foreground",
      },
      primary: {
        input: "border-primary-400",
        calendarCellTrigger:
          "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
      },
      secondary: {
        input: "border-secondary-400",
        calendarCellTrigger:
          "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
      },
      success: {
        input: "border-success-400",
        calendarCellTrigger:
          "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
      },
      warning: {
        input: "border-warning-400",
        calendarCellTrigger:
          "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
      },
      danger: {
        input: "border-danger-400",
        calendarCellTrigger:
          "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground",
      },
    },
    radius: {
      none: {
        input: "rounded-none",
        calendar: "rounded-none",
      },
      sm: {
        input: "rounded-sm",
        calendar: "rounded-sm",
      },
      md: {
        input: "rounded-md",
        calendar: "rounded-md",
      },
      lg: {
        input: "rounded-lg",
        calendar: "rounded-lg",
      },
      full: {
        input: "rounded-full",
        calendar: "rounded-full",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
    isInvalid: {
      true: {
        input: "border-danger",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
    isDisabled: false,
    isRequired: false,
    isInvalid: false,
  },
})
