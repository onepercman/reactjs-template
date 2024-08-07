import { tv } from "tailwind-variants"

export const drawer = tv({
  slots: {
    overlay: "bg-background/50 backdrop-blur fixed inset-0",
    handle: "bg-foreground/50",
    closeTrigger: "absolute top-4 right-4 text-secondary",
    content: [
      "bg-component fixed p-4 rounded",
      "[&[vaul-drawer-direction=left]]:left-0 min-w-52",
      "[&[vaul-drawer-direction=left]]:top-0",
      "[&[vaul-drawer-direction=left]]:bottom-0",
      "[&[vaul-drawer-direction=right]]:right-0 min-w-52",
      "[&[vaul-drawer-direction=right]]:top-0",
      "[&[vaul-drawer-direction=right]]:bottom-0",
      "[&[vaul-drawer-direction=bottom]]:bottom-0 min-h-52",
      "[&[vaul-drawer-direction=bottom]]:left-0",
      "[&[vaul-drawer-direction=bottom]]:right-0",
      "[&[vaul-drawer-direction=top]]:top-0 min-h-52",
      "[&[vaul-drawer-direction=top]]:left-0",
      "[&[vaul-drawer-direction=top]]:right-0",
    ],
    title: "text-sm font-medium py-2",
    description: "text-sm text-secondary",
  },
})
