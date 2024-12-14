"use client"

import React from "react"
import { ComposedTVProps } from "react-tvcx"
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
    ComposedTVProps<typeof button> {}

export function useButton({
  onClick,
  loading,
  disabled,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const className = button(props)

  const [asyncLoading, setAsyncLoading] = React.useState(false)

  async function handleClick(ev: React.MouseEvent<HTMLButtonElement>) {
    if (!onClick) return

    if (onClick.constructor.name === "AsyncFunction") {
      try {
        setAsyncLoading(true)
        await onClick(ev)
      } catch (err) {
        throw new Error(err as any)
      } finally {
        setAsyncLoading(false)
      }
    } else {
      onClick(ev)
    }
  }

  const _loading = Boolean(asyncLoading || loading)

  return {
    className,
    onClick: handleClick,
    loading: _loading,
    disabled: _loading || disabled,
    ...props,
  }
}
