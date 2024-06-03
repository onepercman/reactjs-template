import { input } from "@/libs/ui/theme"
import { useComposedRefs } from "@/libs/ui/utils/ref"
import * as Ark from "@ark-ui/react"
import React from "react"
import { HiEye, HiEyeOff } from "react-icons/hi"
import { LuX } from "react-icons/lu"
import { VariantProps } from "tailwind-variants"

export type InputVariantProps = VariantProps<typeof input>

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix" | "size">,
    InputVariantProps {
  label?: React.ReactNode
  required?: boolean
  prefix?: React.ReactNode | React.ReactElement
  suffix?: React.ReactNode | React.ReactElement
  addonBefore?: React.ReactNode | React.ReactElement
  addonAfter?: React.ReactNode | React.ReactElement
  invalid?: boolean
  invalidMessage?: React.ReactNode
  clearable?: boolean
  transform?(value: string): string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      prefix,
      suffix,
      addonBefore,
      addonAfter,
      size,
      variant,
      invalid,
      invalidMessage,
      required,
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
          <LuX
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

      if (typeof element === "object" && "type" in element) return React.cloneElement(element)
      return <span>{element}</span>
    }

    function _renderSuffix() {
      const element = suffix as React.ReactElement
      if (!element) return null
      if (typeof element === "object" && "type" in element) return React.cloneElement(element)
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

    const classes = input({ size, variant, invalid })

    return (
      <label
        role="input"
        className={classes.base({ className })}
        onClick={function (e) {
          e.currentTarget.getElementsByTagName("input")[0].focus()
        }}
      >
        <div className={classes.label()}>
          <span>{label}</span>
          {required ? <span className="text-error text-xs">(*)</span> : null}
        </div>
        <div
          className={classes.group({
            class: addonBefore ? "pl-0" : addonAfter ? "pr-0" : "",
          })}
        >
          {_renderAddonBefore()}
          {_renderPrefix()}
          <input ref={composedRef} onChange={handleChange} className={classes.input()} {...props} />
          {getClear()}
          {getTogglePassword()}
          {_renderSuffix()}
          {_renderAddonAfter()}
        </div>
        <Ark.Presence className="text-error animate-in fade-in text-xs" present={Boolean(invalid && invalidMessage)}>
          {invalidMessage}
        </Ark.Presence>
      </label>
    )
  },
)

Input.displayName = "Input"
