import { tv } from "tailwind-variants"

export const radioGroup = tv({
  base: "flex flex-col gap-2",
  slots: {
    label: "text-sm text-secondary",
    item: "inline-flex items-center gap-2 cursor-pointer",
    itemText: "",
    control:
      "rounded-full text-transparent border-2 border-line after:content-[''] after:h-full after:w-full after:rounded-full after:bg-transparent data-[state=checked]:after:bg-primary flex text-sm p-1 data-[hover]:border-primary duration-300 data-[state=checked]:border-primary",
  },
  variants: {
    size: {
      xs: { label: "text-xs", itemText: "text-xs", control: "h-4 w-4" },
      sm: { label: "text-sm", itemText: "text-sm", control: "h-5 w-5" },
      md: { label: "text-md", itemText: "text-md", control: "h-6 w-6" },
      lg: { label: "text-lg", itemText: "text-lg", control: "h-7 w-7" },
    },
    invalid: {
      true: {
        label: "text-error",
        control:
          "data-[state=checked]:border-error data-[state=checked]:after:bg-error",
        itemText: "data-[state=checked]:text-error",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
