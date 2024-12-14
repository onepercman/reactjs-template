"use client"

import { cn, forwardRef } from "react-tvcx"
import { Spinner } from "../spinner"
import { ButtonProps, useButton } from "./use-button"

export const Button = forwardRef<"button", ButtonProps>(function (
  {
    as: Component = "button",
    children,
    loadingText,
    loadingVariant = "transparent",
    leftIcon,
    rightIcon,
    ...props
  },
  ref,
) {
  const buttonProps = useButton(props)

  return (
    <Component
      ref={ref}
      type="button"
      data-loading={buttonProps.loading}
      {...buttonProps}
    >
      {buttonProps.loading && (
        <Spinner
          className={loadingVariant === "default" ? "relative" : "absolute"}
        />
      )}
      {leftIcon ? (
        buttonProps.loading ? (
          <span
            className={loadingVariant === "default" ? "hidden" : "opacity-0"}
          >
            {leftIcon}
          </span>
        ) : (
          leftIcon
        )
      ) : null}
      {children || loadingText ? (
        buttonProps.loading ? (
          <span
            className={cn({ "opacity-0": loadingVariant === "transparent" })}
          >
            {loadingText || children}
          </span>
        ) : (
          children
        )
      ) : null}
      {rightIcon ? (
        buttonProps.loading ? (
          <span
            className={cn({ "opacity-0": loadingVariant === "transparent" })}
          >
            {rightIcon}
          </span>
        ) : (
          rightIcon
        )
      ) : null}
    </Component>
  )
})

Button.displayName = "Button"
