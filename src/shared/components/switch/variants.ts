import { tv } from "tailwind-variants"

export const switchVariants = tv({
  base: "inline-flex cursor-pointer items-center gap-2",
  slots: {
    label: "",
    control: [
      "relative flex rounded-full bg-default transition-colors",
      "data-[state=checked]:bg-primary",
    ],
    thumb: [
      "absolute bottom-1 left-1 top-1 aspect-square rounded-full bg-muted transition-all",
      "data-[state=checked]:bg-white",
    ],
  },
  variants: {
    size: {
      xs: {
        label: "text-xs",
        control: "h-4 w-7 text-xs",
        thumb: "data-[state=checked]:left-4",
      },
      sm: {
        label: "text-sm",
        control: "h-5 w-9 text-sm",
        thumb: "data-[state=checked]:left-5",
      },
      md: {
        label: "text-base",
        control: "h-6 w-11 text-base",
        thumb: "data-[state=checked]:left-6",
      },
      lg: {
        label: "text-lg",
        control: "h-8 w-14 text-lg",
        thumb: "data-[state=checked]:left-7",
      },
    },
    indeterminate: {
      true: {
        control:
          "data-[state=checked]:bg-primary data-[state=checked]:text-white",
      },
    },
    placement: {
      head: "flex-row",
      tail: "flex-row-reverse",
    },
  },
  defaultVariants: {
    size: "md",
    placement: "head",
    variant: "outlined",
    color: "primary",
  },
})
