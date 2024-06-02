import React from "react"
import { tv, VariantProps } from "tailwind-variants"
import { Spinner } from "../spinner"

const button = tv({
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
      class: "bg-default hover:bg-default",
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

type ButtonVariantProps = VariantProps<typeof button>

interface ButtonBaseProps {
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  loadingVariant?: "default" | "transparent"
}

interface ButtonProps
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariantProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  {
    children,
    disabled,
    loading,
    loadingText,
    loadingVariant = "default",
    leftIcon,
    rightIcon,
    className,
    variant,
    color,
    size,
    shape,
    onClick,
    ...props
  },
  ref,
) {
  const [asyncLoading, setAsyncLoading] = React.useState(false)

  async function _onClick(ev: React.MouseEvent<HTMLButtonElement>) {
    if (!onClick) return
    if (onClick.constructor.name === "AsyncFunction") {
      try {
        setAsyncLoading(true)
        onClick && (await onClick(ev))
      } catch (err) {
        throw new Error(err as any)
      } finally {
        setAsyncLoading(false)
      }
    } else {
      onClick(ev)
    }
  }

  const _loading = asyncLoading || loading
  const _disabled = disabled || _loading
  const _className = button({
    variant,
    color,
    size,
    className,
    shape,
    disabled: _disabled,
  })

  return (
    <button
      ref={ref}
      type="button"
      className={_className}
      disabled={_disabled}
      onClick={_onClick}
      data-loading={_loading}
      {...props}
    >
      {_loading && <Spinner className={loadingVariant === "default" ? "relative" : "absolute"} />}

      {leftIcon ? (
        _loading ? (
          <span className={loadingVariant === "default" ? "hidden" : "opacity-0"}>{leftIcon}</span>
        ) : (
          leftIcon
        )
      ) : null}

      {children || loadingText ? (
        _loading ? (
          <span className={loadingVariant === "transparent" ? "opacity-0" : ""}>{loadingText || children}</span>
        ) : (
          children
        )
      ) : null}

      {rightIcon ? (
        _loading ? (
          <span className={loadingVariant === "transparent" ? "opacity-0" : ""}>{rightIcon}</span>
        ) : (
          rightIcon
        )
      ) : null}
    </button>
  )
})

Button.displayName = "Button"

export { Button }
export type { ButtonBaseProps, ButtonProps, ButtonVariantProps }
