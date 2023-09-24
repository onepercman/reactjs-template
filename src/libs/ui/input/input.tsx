"use client"

import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { HiEye, HiEyeOff, HiX } from "react-icons/hi"
import { cn } from "../utils/className"
import { useComposedRefs } from "../utils/compose-refs"

const inputVariants = cva(cn("input"), {
  variants: {
    size: {
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
    },
    variant: {
      filled: "input-filled",
      outlined: "input-outlined",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
})

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix" | "size">,
    VariantProps<typeof inputVariants> {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  clearable?: boolean
  isError?: boolean
  transform?(value: string): string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      prefix,
      suffix,
      addonBefore,
      addonAfter,
      size,
      variant,
      clearable,
      onChange,
      transform,
      isError,
      ...props
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null)
    const composedRef = useComposedRefs(ref, internalRef)

    const isGroup = !!(prefix || suffix || addonBefore || addonAfter || props.type === "password" || clearable)

    const [showClear, setShowClear] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)

    function getTogglePassword() {
      if (props.type === "password") {
        if (showPassword) {
          return (
            <HiEye
              className="ml-2"
              onClick={() => {
                if (internalRef.current) {
                  internalRef.current.type = "password"
                  setShowPassword(false)
                }
              }}
            />
          )
        }
        return (
          <HiEyeOff
            className="text-muted ml-2"
            onClick={() => {
              if (internalRef.current) {
                internalRef.current.type = "text"
                setShowPassword(true)
              }
            }}
          />
        )
      }
    }

    function getClear() {
      if (showClear && clearable) {
        return (
          <HiX
            className="text-muted ml-3"
            onClick={function () {
              if (internalRef.current) {
                setShowClear(false)
                internalRef.current.value = ""
                const currentTarget = internalRef.current.cloneNode(true)
                const event = Object.create(new Event("change"), {
                  target: { value: currentTarget },
                  currentTarget: { value: currentTarget },
                })
                onChange && onChange(event)
              }
            }}
          />
        )
      }
    }

    function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
      if (transform && internalRef.current) {
        internalRef.current.value = transform(internalRef.current.value)
      }
      onChange && onChange(ev)
      setShowClear(!!ev.target.value)
    }

    if (isGroup)
      return (
        <span
          role="input"
          className={cn(
            "input-group",
            isError && "state-error",
            props.disabled && "input-group-disabled",
            inputVariants({ size, variant, className }),
          )}
          onClick={(e) => e.currentTarget.getElementsByTagName("input")[0].focus()}
        >
          {!!addonBefore && <span className="input-group-addon-before">{addonBefore}</span>}
          {!!prefix && <span className="input-group-prefix">{prefix}</span>}
          <input ref={composedRef} onChange={handleChange} {...props} />
          {getClear()}
          {getTogglePassword()}
          {!!suffix && <span className="input-group-suffix">{suffix}</span>}
          {!!addonAfter && <span className="input-group-addon-after">{addonAfter}</span>}
        </span>
      )
    return (
      <input
        ref={composedRef}
        onChange={handleChange}
        className={cn(inputVariants({ size, variant, className }), isError && "state-error")}
        {...props}
      />
    )
  },
)

Input.displayName = "Input"
