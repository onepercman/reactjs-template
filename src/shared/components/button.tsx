import { Button as BaseButton, extendVariants } from "@heroui/react"

export const Button = extendVariants(BaseButton, {
  variants: {
    size: {
      sm: "h-8 px-4 text-tiny [&>svg]:w-4 [&>svg]:h-4",
      md: "h-10 px-5 text-small [&>svg]:w-5 [&>svg]:h-5",
      lg: "h-12 px-6 text-medium [&>svg]:w-6 [&>svg]:h-6",
    },
    color: {
      default: "bg-default text-default-foreground hover:bg-default/50",
      primary: "bg-primary text-primary-foreground hover:bg-primary/50",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/50",
      success: "bg-success text-success-foreground hover:bg-success/50",
      warning: "bg-warning text-warning-foreground hover:bg-warning/50",
      danger: "bg-danger text-danger-foreground hover:bg-danger/50",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none",
    },
    isLoading: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "md",
    isDisabled: false,
    isLoading: false,
  },
})
