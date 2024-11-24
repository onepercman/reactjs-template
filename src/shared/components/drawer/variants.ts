import { tv } from "tailwind-variants"

export const drawer = tv({
  slots: {
    overlay: "fixed inset-0 bg-background/50 backdrop-blur",
    handle: "bg-foreground/50",
    closeTrigger: "absolute right-4 top-4 text-secondary",
    content: [
      "fixed rounded bg-component p-4",
      "min-w-52 [&[vaul-drawer-direction=left]]:left-0",
      "[&[vaul-drawer-direction=left]]:top-0",
      "[&[vaul-drawer-direction=left]]:bottom-0",
      "min-w-52 [&[vaul-drawer-direction=right]]:right-0",
      "[&[vaul-drawer-direction=right]]:top-0",
      "[&[vaul-drawer-direction=right]]:bottom-0",
      "min-h-52 [&[vaul-drawer-direction=bottom]]:bottom-0",
      "[&[vaul-drawer-direction=bottom]]:left-0",
      "[&[vaul-drawer-direction=bottom]]:right-0",
      "min-h-52 [&[vaul-drawer-direction=top]]:top-0",
      "[&[vaul-drawer-direction=top]]:left-0",
      "[&[vaul-drawer-direction=top]]:right-0",
    ],
    title: "py-2 text-sm font-medium",
    description: "text-sm text-secondary",
  },
})
