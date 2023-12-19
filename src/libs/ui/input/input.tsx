import { VariantProps, cva } from "class-variance-authority"
import React from "react"
import { HiEye, HiEyeOff, HiX } from "react-icons/hi"
import { cn } from "../utils/className"
import { useComposedRefs } from "../utils/ref"

const input = cva("input", {
  variants: {
    size: {
      sm: "size-sm",
      md: "size-md",
      lg: "size-lg",
    },
    variant: {
      filled: "input-filled",
      outlined: "input-outlined",
    },
    error: {
      true: "state-error",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
})

type InputVariantProps = VariantProps<typeof input>

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix" | "size">,
    InputVariantProps {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  clearable?: boolean
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
      error,
      clearable,
      onChange,
      transform,
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
        <div
          role="input"
          className={cn(
            input({ size, variant, error, className }),
            "input-group",
            props.disabled && "input-group-disabled",
          )}
          onClick={function (e) {
            e.currentTarget.getElementsByTagName("input")[0].focus()
          }}
        >
          {!!addonBefore && <span className="input-addon-before">{addonBefore}</span>}
          {!!prefix && <span className="input-prefix">{prefix}</span>}
          <input ref={composedRef} onChange={handleChange} {...props} />
          {getClear()}
          {getTogglePassword()}
          {!!suffix && <span className="input-suffix">{suffix}</span>}
          {!!addonAfter && <span className="input-addon-after">{addonAfter}</span>}
        </div>
      )
    return (
      <input
        ref={composedRef}
        onChange={handleChange}
        className={input({ size, variant, error, className })}
        {...props}
      />
    )
  },
)

Input.displayName = "Input"
