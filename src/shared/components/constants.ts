export const SIZES = {
  sm: {
    text: "text-tiny",
    padding: "p-4",
    height: "h-8",
    width: "w-8",
  },
  md: {
    text: "text-small",
    padding: "p-5",
    height: "h-10",
    width: "w-10",
  },
  lg: {
    text: "text-medium",
    padding: "p-6",
    height: "h-12",
    width: "w-12",
  },
} as const

export const COLORS = {
  default: {
    bg: "bg-default",
    text: "text-default-foreground",
    border: "border-default-200",
    hover: "hover:bg-default/50",
  },
  primary: {
    bg: "bg-primary",
    text: "text-primary-foreground",
    border: "border-primary-200",
    hover: "hover:bg-primary/50",
  },
  secondary: {
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    border: "border-secondary-200",
    hover: "hover:bg-secondary/50",
  },
  success: {
    bg: "bg-success",
    text: "text-success-foreground",
    border: "border-success-200",
    hover: "hover:bg-success/50",
  },
  warning: {
    bg: "bg-warning",
    text: "text-warning-foreground",
    border: "border-warning-200",
    hover: "hover:bg-warning/50",
  },
  danger: {
    bg: "bg-danger",
    text: "text-danger-foreground",
    border: "border-danger-200",
    hover: "hover:bg-danger/50",
  },
} as const

export const RADIUS = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
} as const

export const SHADOWS = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
} as const

export const STATES = {
  disabled: "opacity-disabled pointer-events-none",
  required: "after:content-['*'] after:text-danger after:ml-0.5",
  invalid: "border-danger",
} as const

export const PLACEMENTS = {
  top: {
    content: "bottom-0 left-1/2 -translate-x-1/2",
  },
  bottom: {
    content: "top-0 left-1/2 -translate-x-1/2",
  },
  left: {
    content: "right-0 top-1/2 -translate-y-1/2",
  },
  right: {
    content: "left-0 top-1/2 -translate-y-1/2",
  },
} as const

export const BACKDROPS = {
  transparent: "bg-transparent",
  opaque: "bg-overlay/50",
  blur: "backdrop-blur-sm bg-overlay/30",
} as const

export const SCROLL_BEHAVIORS = {
  normal: "overflow-y-auto",
  inside: "overflow-y-auto",
  outside: "overflow-y-auto",
} as const
