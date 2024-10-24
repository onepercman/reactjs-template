import { tv } from "tailwind-variants"

export const radioGroup = tv({
  base: "flex flex-col gap-2",
  slots: {
    item: "inline-flex cursor-pointer items-center gap-2",
    itemText: "",
    control:
      "flex rounded-full border-2 border-line p-1 text-sm text-transparent duration-300 after:h-full after:w-full after:rounded-full after:bg-transparent after:content-[''] data-[hover]:border-primary data-[state=checked]:border-primary data-[state=checked]:after:bg-primary",
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
