import { tv } from "tailwind-variants"

export const button = tv({
  base: [
    "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap font-semibold",
    "cursor-pointer border-0 border-transparent outline-none ring ring-transparent transition-all",
    "h-[var(--button-size)] min-h-[var(--button-size)] min-w-[var(--button-size)] px-2 text-xs",
    "[&:not(:disabled)]:active:brightness-105",
    "disabled:cursor-not-allowed disabled:opacity-75 disabled:saturate-0 disabled:data-[loading]:saturate-50",
  ],
  variants: {
    size: {
      xs: "px-2 text-xs [--button-size:1.25rem]",
      sm: "px-2 text-sm [--button-size:1.5rem]",
      md: "px-4 text-sm [--button-size:2.25rem]",
      lg: "px-4 [--button-size:2.75rem]",
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
      circle: "aspect-square rounded-full p-0",
      square: "aspect-square rounded p-0",
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
        "[&:not(:disabled)]:hover:bg-primary-600",
      ],
    },
    {
      variant: "default",
      color: "info",
      class: [
        "bg-info",
        "text-success-info",
        "[&:not(:disabled)]:hover:bg-info-600",
      ],
    },
    {
      variant: "default",
      color: "success",
      class: [
        "bg-success",
        "text-success-foreground",
        "[&:not(:disabled)]:hover:bg-success-600",
      ],
    },
    {
      variant: "default",
      color: "warning",
      class: [
        "bg-warning",
        "text-warning-foreground",
        "[&:not(:disabled)]:hover:bg-warning-600",
      ],
    },
    {
      variant: "default",
      color: "error",
      class: [
        "bg-error",
        "text-error-foreground",
        "[&:not(:disabled)]:hover:bg-error-600",
      ],
    },
    {
      variant: "default",
      color: "accent",
      class: [
        "bg-accent",
        "text-accent-foreground",
        "[&:not(:disabled)]:hover:bg-accent-600",
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
