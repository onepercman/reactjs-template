import { Spinner } from "@/libs/ui/spinner"
import { ButtonVariantProps, button } from "@/libs/ui/theme"
import React from "react"

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
