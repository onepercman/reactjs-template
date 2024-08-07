import { tv } from "tailwind-variants"

export const dialog = tv({
  slots: {
    backdrop: [
      "fixed inset-0 bg-background/60 backdrop-blur",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    positioner: "flex fixed inset-0 p-4",
    content: [
      "bg-component border border-line shadow p-4 rounded relative w-full h-fit",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    title: "text-sm font-medium pb-4",
    closeTrigger: "absolute top-3 right-4",
    description: "",
  },
  variants: {
    size: {
      sm: { content: "max-w-[340px]" },
      md: { content: "max-w-[640px]" },
      lg: { content: "max-w-[768px]" },
    },
    placement: {
      center: { content: "m-auto" },
      topCenter: { content: "mx-auto mt-24" },
      left: { content: "h-full mr-auto" },
      right: { content: "h-full ml-auto" },
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
