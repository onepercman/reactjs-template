"use client"

import React from "react"
import { Loading } from "../loading"
import { cn } from "../utils/className"
import { ButtonVariantProps, button } from "./variants"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  loading?: boolean
  loadingText?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
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
    <button ref={ref} className={_className} disabled={_disabled} onClick={_onClick} {...props}>
      {leftIcon && !_loading ? leftIcon : null}
      {_loading && <Loading className={_loadingClassName} />}
      {_loading ? loadingText || _transparentChildren : children}
      {rightIcon && !_loading ? rightIcon : null}
    </button>
  )
})

Button.displayName = "Button"
