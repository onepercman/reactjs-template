import { tv } from "tailwind-variants"

export const button = tv({
  base: [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "border-transparent ring ring-transparent transition-all cursor-pointer border-0 outline-none",
    "[&:not(:disabled)]:active:scale-95",
    "h-[var(--button-size)] min-h-[var(--button-size)] min-w-[var(--button-size)] px-2 text-xs",
    "[&:not(:disabled)]:hover:brightness-110",
  ],
  variants: {
    size: {
      xs: "[--button-size:1.25rem] px-2 text-xs",
      sm: "[--button-size:1.5rem] px-2 text-sm",
      md: "[--button-size:2.25rem] px-4 text-sm",
      lg: "[--button-size:2.75rem] px-4",
    },
    variant: {
      default: "border-0",
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
      class: [
        "bg-primary",
        "text-primary-foreground",
        "[&:not(:disabled)]:hover:bg-primary-200",
      ],
    },
    {
      variant: "default",
      color: "info",
      class: [
        "bg-info",
        "text-success-info",
        "[&:not(:disabled)]:hover:bg-info-200",
      ],
    },
    {
      variant: "default",
      color: "success",
      class: [
        "bg-success",
        "text-success-foreground",
        "[&:not(:disabled)]:hover:bg-success-200",
      ],
    },
    {
      variant: "default",
      color: "warning",
      class: [
        "bg-warning",
        "text-warning-foreground",
        "[&:not(:disabled)]:hover:bg-warning-200",
      ],
    },
    {
      variant: "default",
      color: "error",
      class: [
        "bg-error",
        "text-error-foreground",
        "[&:not(:disabled)]:hover:bg-error-200",
      ],
    },
    {
      variant: "default",
      color: "accent",
      class: [
        "bg-accent",
        "text-accent-foreground",
        "[&:not(:disabled)]:hover:bg-accent-200",
      ],
    },
    // light
    {
      variant: "light",
      color: "default",
      class: [
        "bg-default/20",
        "text-foreground",
        "[&:not(:disabled)]:hover:bg-default/50",
      ],
    },
    {
      variant: "light",
      color: "primary",
      class: [
        "bg-primary/20",
        "text-primary",
        "[&:not(:disabled)]:hover:bg-primary/50",
      ],
    },
    {
      variant: "light",
      color: "info",
      class: ["bg-info/20", "text-info", "[&:not(:disabled)]:hover:bg-info/50"],
    },
    {
      variant: "light",
      color: "success",
      class: [
        "bg-success/20",
        "text-success",
        "[&:not(:disabled)]:hover:bg-success/50",
      ],
    },
    {
      variant: "light",
      color: "warning",
      class: [
        "bg-warning/20",
        "text-warning",
        "[&:not(:disabled)]:hover:bg-warning/50",
      ],
    },
    {
      variant: "light",
      color: "error",
      class: [
        "bg-error/20",
        "text-error",
        "[&:not(:disabled)]:hover:bg-error/50",
      ],
    },
    {
      variant: "light",
      color: "accent",
      class: [
        "bg-accent/20",
        "accent-error",
        "[&:not(:disabled)]:hover:bg-accent/50",
      ],
    },
    // outlined
    {
      variant: "outlined",
      color: "default",
      class: ["border-line", "[&:not(:disabled)]:hover:bg-default-600"],
    },
    {
      variant: "outlined",
      color: "primary",
      class: [
        "border-primary text-primary",
        "[&:not(:disabled)]:hover:border-primary-600 [&:not(:disabled)]:hover:text-primary-600",
      ],
    },
    {
      variant: "outlined",
      color: "info",
      class: [
        "border-info text-info",
        "[&:not(:disabled)]:hover:border-info-600 [&:not(:disabled)]:hover:text-info-600",
      ],
    },
    {
      variant: "outlined",
      color: "success",
      class: [
        "border-success text-success",
        "[&:not(:disabled)]:hover:border-success-600 [&:not(:disabled)]:hover:text-success-600",
      ],
    },
    {
      variant: "outlined",
      color: "warning",
      class: [
        "border-warning text-warning",
        "[&:not(:disabled)]:hover:border-warning-600 [&:not(:disabled)]:hover:text-warning-600",
      ],
    },
    {
      variant: "outlined",
      color: "error",
      class: [
        "border-error text-error",
        "[&:not(:disabled)]:hover:border-error-600 [&:not(:disabled)]:hover:text-error-600",
      ],
    },
    {
      variant: "outlined",
      color: "accent",
      class: [
        "border-accent text-accent",
        "[&:not(:disabled)]:hover:border-accent-600 [&:not(:disabled)]:hover:text-accent-600",
      ],
    },
    // ghost
    {
      variant: "ghost",
      color: "default",
      class: ["text-foreground", "[&:not(:disabled)]:hover:bg-default"],
    },
    {
      variant: "ghost",
      color: "primary",
      class: ["text-primary", "[&:not(:disabled)]:hover:bg-primary/10"],
    },
    {
      variant: "ghost",
      color: "info",
      class: ["text-info", "[&:not(:disabled)]:hover:bg-info/10"],
    },
    {
      variant: "ghost",
      color: "success",
      class: ["text-success", "[&:not(:disabled)]:hover:bg-success/10"],
    },
    {
      variant: "ghost",
      color: "warning",
      class: ["text-warning", "[&:not(:disabled)]:hover:bg-warning/10"],
    },
    {
      variant: "ghost",
      color: "error",
      class: ["text-error", "[&:not(:disabled)]:hover:bg-error/10"],
    },
    {
      variant: "ghost",
      color: "accent",
      class: ["text-accent", "[&:not(:disabled)]:hover:bg-accent/10"],
    },
  ],
  defaultVariants: {
    variant: "default",
    color: "default",
    size: "md",
    shape: "normal",
  },
})
