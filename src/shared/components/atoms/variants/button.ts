import { tv } from "tailwind-variants"

export const button = tv({
  base: [
    "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap",
    "border-transparent ring ring-transparent transition-all cursor-pointer border-2 outline-none",
    "hover:brightness-90",
    "active:scale-105",
  ],
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
      light: "border-0",
    },
    color: {
      default: "",
      primary: "",
      accent: "",
      info: "",
      success: "",
      warning: "",
      error: "",
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
    // default
    {
      variant: "default",
      color: "default",
      class: ["bg-default"],
    },
    {
      variant: "default",
      color: "primary",
      class: ["bg-primary", "text-primary-foreground", "hover:bg-primary-600"],
    },
    {
      variant: "default",
      color: "info",
      class: ["bg-info", "text-success-info", "hover:bg-info-600"],
    },
    {
      variant: "default",
      color: "success",
      class: ["bg-success", "text-success-foreground", "hover:bg-success-600"],
    },
    {
      variant: "default",
      color: "warning",
      class: ["bg-warning", "text-warning-foreground", "hover:bg-warning-600"],
    },
    {
      variant: "default",
      color: "error",
      class: ["bg-error", "text-error-foreground", "hover:bg-error-600"],
    },
    {
      variant: "default",
      color: "accent",
      class: ["bg-accent", "text-accent-foreground", "hover:bg-accent-600"],
    },
    // light
    {
      variant: "light",
      color: "default",
      class: ["bg-default/20", "text-foreground", "hover:bg-default/50"],
    },
    {
      variant: "light",
      color: "primary",
      class: ["bg-primary/20", "text-primary", "hover:bg-primary/50"],
    },
    {
      variant: "light",
      color: "info",
      class: ["bg-info/20", "text-info", "hover:bg-info/50"],
    },
    {
      variant: "light",
      color: "success",
      class: ["bg-success/20", "text-success", "hover:bg-success/50"],
    },
    {
      variant: "light",
      color: "warning",
      class: ["bg-warning/20", "text-warning", "hover:bg-warning/50"],
    },
    {
      variant: "light",
      color: "error",
      class: ["bg-error/20", "text-error", "hover:bg-error/50"],
    },
    {
      variant: "light",
      color: "accent",
      class: ["bg-accent/20", "accent-error", "hover:bg-accent/50"],
    },
    // outlined
    {
      variant: "outlined",
      color: "default",
      class: ["border-line", "hover:bg-default-600"],
    },
    {
      variant: "outlined",
      color: "primary",
      class: [
        "border-primary text-primary",
        "hover:border-primary-600 hover:text-primary-600",
      ],
    },
    {
      variant: "outlined",
      color: "info",
      class: [
        "border-info text-info",
        "hover:border-info-600 hover:text-info-600",
      ],
    },
    {
      variant: "outlined",
      color: "success",
      class: [
        "border-success text-success",
        "hover:border-success-600 hover:text-success-600",
      ],
    },
    {
      variant: "outlined",
      color: "warning",
      class: [
        "border-warning text-warning",
        "hover:border-warning-600 hover:text-warning-600",
      ],
    },
    {
      variant: "outlined",
      color: "error",
      class: [
        "border-error text-error",
        "hover:border-error-600 hover:text-error-600",
      ],
    },
    {
      variant: "outlined",
      color: "accent",
      class: [
        "border-accent text-accent",
        "hover:border-accent-600 hover:text-accent-600",
      ],
    },
    // ghost
    {
      variant: "ghost",
      color: "default",
      class: "hover:bg-default",
    },
    {
      variant: "ghost",
      color: "primary",
      class: "text-primary hover:bg-primary/10",
    },
    {
      variant: "ghost",
      color: "info",
      class: "text-info hover:bg-info/10",
    },
    {
      variant: "ghost",
      color: "success",
      class: "text-success hover:bg-success/10",
    },
    {
      variant: "ghost",
      color: "warning",
      class: "text-warning hover:bg-warning/10",
    },
    {
      variant: "ghost",
      color: "error",
      class: "text-error hover:bg-error/10",
    },
    {
      variant: "ghost",
      color: "accent",
      class: "text-accent hover:bg-accent/10",
    },
  ],
  defaultVariants: {
    variant: "default",
    color: "default",
    size: "md",
    shape: "normal",
  },
})
