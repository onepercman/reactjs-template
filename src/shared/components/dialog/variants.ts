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
    positioner: "fixed inset-0 flex p-4",
    content: [
      "relative h-fit w-full rounded border border-line bg-component p-4 shadow",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    title: "pb-4 text-sm font-medium",
    closeTrigger: "absolute right-4 top-3",
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
      left: { content: "mr-auto h-full" },
      right: { content: "ml-auto h-full" },
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
