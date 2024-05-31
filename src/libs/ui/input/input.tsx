import React from "react"
import { HiEye, HiEyeOff, HiX } from "react-icons/hi"
import { VariantProps, tv } from "tailwind-variants"
import { useComposedRefs } from "../utils/ref"

const input = tv({
  slots: {
    base: "border border-transparent rounded px-2 transition-all text-ellipsis inline-flex items-center overflow-hidden cursor-text gap-2",
    input:
      "grow bg-transparent border-transparent focus:outline-none focus:ring-transparent p-0 self-stretch overflow-hidden text-ellipsis h-full",
    addonBefore: "rounded-r-none",
    addonAfter: "rounded-l-none",
  },
  variants: {
    size: {
      xs: { base: "h-[1.5rem] min-h-[1.5rem] min-w-[1.5rem] px-2 text-xs" },
      sm: { base: "h-[2rem] min-h-[2rem] min-w-[2rem] px-2 text-sm" },
      md: { base: "h-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] px-2" },
      lg: { base: "h-[3rem] min-h-[3rem] min-w-[3rem] px-4" },
    },
    variant: {
      filled: { base: "border-0 bg-default" },
      outlined: { base: "border-2 border-line" },
    },
    invalid: {
      true: "border-2 border-error text-error",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
})

type InputVariantProps = VariantProps<typeof input>

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "prefix" | "suffix" | "size"
    >,
    InputVariantProps {
  prefix?: React.ReactNode | React.ReactElement
  suffix?: React.ReactNode | React.ReactElement
  addonBefore?: React.ReactNode | React.ReactElement
  addonAfter?: React.ReactNode | React.ReactElement
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
      invalid,
      clearable,
      onChange,
      transform,
      ...props
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null)
    const composedRef = useComposedRefs(ref, internalRef)

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
            className="text-secondary ml-2"
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
            className="text-secondary cursor-pointer"
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

    function _renderPrefix() {
      const element = prefix as React.ReactElement
      if (!element) return null

      if (typeof element === "object" && "type" in element)
        return React.cloneElement(element)
      return <span>{element}</span>
    }

    function _renderSuffix() {
      const element = suffix as React.ReactElement
      if (!element) return null
      if (typeof element === "object" && "type" in element)
        return React.cloneElement(element)
      return <span>{element}</span>
    }

    function _renderAddonBefore() {
      const element = addonBefore as React.ReactElement
      if (!element) return null
      if (typeof element === "object" && "type" in element)
        return React.cloneElement(element, {
          className: classes.addonBefore({ class: element.props.className }),
        })
      return <span className={classes.addonBefore()}>{element}</span>
    }

    function _renderAddonAfter() {
      const element = addonAfter as React.ReactElement
      if (!element) return null
      if (typeof element === "object" && "type" in element)
        return React.cloneElement(element, {
          className: classes.addonAfter({ class: element.props.className }),
        })
      return <span className={classes.addonAfter()}>{element}</span>
    }

    const classes = input({ size, variant, invalid, className })

    return (
      <div
        role="input"
        className={classes.base({
          class: addonBefore ? "pl-0" : addonAfter ? "pr-0" : "",
        })}
        onClick={function (e) {
          e.currentTarget.getElementsByTagName("input")[0].focus()
        }}
      >
        {_renderAddonBefore()}
        {_renderPrefix()}
        <input
          ref={composedRef}
          onChange={handleChange}
          className={classes.input()}
          {...props}
        />
        {getClear()}
        {getTogglePassword()}
        {_renderSuffix()}
        {_renderAddonAfter()}
      </div>
    )
  },
)

Input.displayName = "Input"
