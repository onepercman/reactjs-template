"use client"

import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { Loading } from "../loading"
import { cn } from "../utils/className"

const buttonVariants = cva(cn("btn"), {
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /* Shows loading */
  loading?: boolean
  /* Makes button disabled */
  disabled?: boolean
  /* The label to show in the button when loading is true */
  loadingText?: string
  /* Set the original html type of button */
  type?: "button" | "reset" | "submit"
  /* Adds icon before button label */
  leftIcon?: React.ReactElement
  /* Adds icon after button label */
  rightIcon?: React.ReactElement
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled: _disabled,
      loading,
      loadingText,
      leftIcon,
      rightIcon,
      children,
      className,
      variant,
      size,
      shape,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [asyncLoading, setAsyncLoading] = React.useState(false)
    const buttonLoading = asyncLoading || loading
    const disabled = _disabled || buttonLoading

    async function handleCLick(ev: React.MouseEvent<HTMLButtonElement>) {
      if (!onClick) return
      if (onClick.constructor.name === "AsyncFunction") {
        setAsyncLoading(true)
        onClick && (await onClick(ev))
        setAsyncLoading(false)
      } else onClick(ev)
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className, shape }))}
        disabled={disabled}
        onClick={handleCLick}
        {...props}
      >
        {leftIcon && !buttonLoading ? leftIcon : null}
        {buttonLoading && (
          <Loading className={cn(loadingText ? "relative" : "absolute", loadingText ? `mr-2` : "mr-0")} />
        )}
        {buttonLoading ? loadingText || <span className="opacity-0">{children}</span> : children}
        {rightIcon && !buttonLoading ? rightIcon : null}
      </button>
    )
  },
)

Button.displayName = "Button"
