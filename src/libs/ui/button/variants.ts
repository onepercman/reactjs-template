import { VariantProps, cva } from "class-variance-authority"

export const button = cva("btn", {
  variants: {
    size: {
      xs: "btn-xs",
      md: "btn-md",
      sm: "btn-sm",
      lg: "btn-lg",
    },
    variant: {
      default: "btn-default",
      primary: "btn-primary",
      "primary-outlined": "btn-primary-outlined",
      outlined: "btn-outlined",
      ghost: "btn-ghost",
      success: "btn-success",
      error: "btn-error",
    },
    shape: {
      normal: "btn-normal",
      pill: "btn-pill",
      rounded: "btn-rounded",
      square: "btn-square",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "normal",
  },
})

export type ButtonVariantProps = VariantProps<typeof button>
