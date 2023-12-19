import { VariantProps, cva } from "class-variance-authority"
import React from "react"
import { Loading } from "../loading"
import { cn } from "../utils/className"

const button = cva("btn", {
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
      outlined: "btn-outlined",
      ghost: "btn-ghost",
      success: "btn-success",
      error: "btn-error",
      static: "btn-static",
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

type ButtonVariantProps = VariantProps<typeof button>

interface ButtonBaseProps {
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

interface ButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, disabled, loading, loadingText, leftIcon, rightIcon, className, variant, size, shape, onClick, ...props },
  ref,
) {
  const [asyncLoading, setAsyncLoading] = React.useState(false)

  async function _onClick(ev: React.MouseEvent<HTMLButtonElement>) {
    if (!onClick) return
    if (onClick.constructor.name === "AsyncFunction") {
      setAsyncLoading(true)
      onClick && (await onClick(ev))
      setAsyncLoading(false)
    } else {
      onClick(ev)
    }
  }

  const _loading = asyncLoading || loading
  const _disabled = disabled || _loading
  const _className = button({ variant, size, className, shape })
  const _loadingClassName = cn(loadingText ? "relative mr-2" : "absolute mr-0")
  const _transparentChildren = <span className="opacity-0">{children}</span>

  return (
    <button ref={ref} type="button" className={_className} disabled={_disabled} onClick={_onClick} {...props}>
      {leftIcon && !_loading ? leftIcon : null}
      {_loading && <Loading className={_loadingClassName} />}
      {_loading ? loadingText || _transparentChildren : children}
      {rightIcon && !_loading ? rightIcon : null}
    </button>
  )
})

Button.displayName = "Button"

export { Button }
export type { ButtonBaseProps, ButtonProps, ButtonVariantProps }
