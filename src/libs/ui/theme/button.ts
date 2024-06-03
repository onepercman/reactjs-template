import { VariantProps, tv } from "tailwind-variants"

export const button = tv({
  base: "inline-flex items-center justify-center gap-2 py-0 font-medium whitespace-nowrap border-transparent ring ring-transparent transition-all cursor-pointer active:brightness-75 border-2 outline-none",
  variants: {
    size: {
      xs: "h-[1.5rem] min-h-[1.5rem] min-w-[1.5rem] px-2 text-xs",
      sm: "h-[2rem] min-h-[2rem] min-w-[2rem] px-2 text-sm",
      md: "h-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] px-4",
      lg: "h-[3rem] min-h-[3rem] min-w-[3rem] px-4",
    },
    variant: {
      default: "border-transparent",
      outlined: "border-2",
      ghost: "border-0 bg-transparent",
    },
    color: {
      default: "",
      primary: "",
      error: "",
      success: "",
      warning: "",
    },
    shape: {
      normal: "rounded",
      pill: "rounded-full",
      circle: "rounded-full aspect-square p-0",
      square: "aspect-square p-0 rounded",
    },
    disabled: {
      true: "saturate-0 opacity-75 cursor-not-allowed data-[loading]:saturate-50",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      color: "default",
      class: "bg-default hover:brightness-150",
    },
    {
      variant: "default",
      color: "primary",
      class: "bg-primary text-primary-foreground hover:bg-primary-600",
    },
    {
      variant: "default",
      color: "error",
      class: "bg-error text-error-foreground hover:bg-error-600",
    },
    {
      variant: "default",
      color: "success",
      class: "bg-success text-success-foreground hover:bg-success-600",
    },
    {
      variant: "default",
      color: "warning",
      class: "bg-warning text-warning-foreground hover:bg-warning-600",
    },
    {
      variant: "outlined",
      color: "default",
      class: "border-line hover:bg-default-600",
    },
    {
      variant: "outlined",
      color: "primary",
      class: "border-primary text-primary hover:border-primary-600 hover:text-primary-600",
    },
    {
      variant: "outlined",
      color: "error",
      class: "border-error text-error hover:border-error-600 hover:text-error-600",
    },
    {
      variant: "outlined",
      color: "success",
      class: "border-success text-success hover:border-success-600 hover:text-success-600",
    },
    {
      variant: "outlined",
      color: "warning",
      class: "border-warning text-warning hover:border-warning-600 hover:text-warning-600",
    },
    {
      variant: "ghost",
      color: "default",
      class: "",
    },
    {
      variant: "ghost",
      color: "primary",
      class: "text-primary",
    },
    {
      variant: "ghost",
      color: "error",
      class: "text-error",
    },
    {
      variant: "ghost",
      color: "success",
      class: "text-success",
    },
    {
      variant: "ghost",
      color: "warning",
      class: "text-warning",
    },
  ],
  defaultVariants: {
    variant: "default",
    color: "default",
    size: "md",
    shape: "normal",
  },
})

export type ButtonVariantProps = VariantProps<typeof button>
export type ButtonReturnType = ReturnType<typeof button>
export type ButtonSlots = keyof ButtonReturnType
