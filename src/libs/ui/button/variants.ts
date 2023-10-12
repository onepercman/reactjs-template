import { VariantProps, cva } from "class-variance-authority"

export const button = cva("btn", {
  variants: {
    size: {
      xs: "size-xs",
      md: "size-md",
      sm: "size-sm",
      lg: "size-lg",
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
