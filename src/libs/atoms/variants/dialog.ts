import { tv } from "tailwind-variants"

export const dialog = tv({
  base: [
    "bg-component border border-line shadow p-4 rounded relative w-full h-fit",
    "data-[state=open]:animate-in",
    "data-[state=open]:fade-in",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out",
  ],
  slots: {
    backdrop: [
      "fixed inset-0 bg-background/60 backdrop-blur",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    positioner: "flex fixed inset-0 p-4",
    title: "text-sm font-medium pb-4",
    close: "absolute top-3 right-4",
    description: "",
  },
  variants: {
    size: {
      sm: "max-w-[340px]",
      md: "max-w-[640px]",
      lg: "max-w-[768px]",
    },
    placement: {
      center: "m-auto",
      topCenter: "mx-auto mt-24",
      left: "h-full mr-auto",
      right: "h-full ml-auto",
    },
    scrollBehavior: {
      inside: "",
      outside: "",
    },
  },
  defaultVariants: {
    size: "sm",
    placement: "topCenter",
  },
})
