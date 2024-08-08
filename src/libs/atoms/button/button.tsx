import React from "react"
import { Spinner } from "../spinner"
import { ComposedTVProps } from "../types"
import { cn } from "../utils/cn"
import { button } from "./variants"

export interface ButtonBaseProps {
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactElement | React.ReactNode
  rightIcon?: React.ReactElement | React.ReactNode
  loadingVariant?: "default" | "transparent"
}

export interface ButtonProps
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ComposedTVProps<typeof button> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
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
          <span className={cn({ "opacity-0": loadingVariant === "transparent" })}>{loadingText || children}</span>
        ) : (
          children
        )
      ) : null}

      {rightIcon ? (
        _loading ? (
          <span className={cn({ "opacity-0": loadingVariant === "transparent" })}>{rightIcon}</span>
        ) : (
          rightIcon
        )
      ) : null}
    </button>
  )
})

Button.displayName = "Button"
