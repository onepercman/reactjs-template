import React from "react"
import { HiEye, HiEyeOff } from "react-icons/hi"
import { LuX } from "react-icons/lu"
import { ComposedTVProps } from "../types"
import { cn, useComposedRefs } from "../utils"
import { input } from "./variants"

export interface InputFieldProps {
  prefix?: React.ReactNode | React.ReactElement
  suffix?: React.ReactNode | React.ReactElement
  addonBefore?: React.ReactNode | React.ReactElement
  addonAfter?: React.ReactNode | React.ReactElement
  clearable?: boolean
  transform?(value: string): string
}

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "prefix" | "suffix" | "size"
    >,
    InputFieldProps,
    ComposedTVProps<typeof input> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      className,
      classNames,
      ...props
    },
    ref,
  ) => {
    const styles = input({ size, variant, invalid })

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
            className="ml-2 text-secondary"
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
            className="cursor-pointer text-secondary"
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
          className: styles.addonBefore({
            className: element.props.className,
            class: classNames?.addonBefore,
          }),
        })
      return (
        <span
          className={styles.addonBefore({ class: classNames?.addonBefore })}
        >
          {element}
        </span>
      )
    }

    function _renderAddonAfter() {
      const element = addonAfter as React.ReactElement
      if (!element) return null
      if (typeof element === "object" && "type" in element)
        return React.cloneElement(element, {
          className: styles.addonAfter({
            className: element.props.className,
            class: classNames?.addonAfter,
          }),
        })
      return (
        <span className={styles.addonAfter({ class: classNames?.addonAfter })}>
          {element}
        </span>
      )
    }

    return (
      <label
        role="input"
        className={styles.base({
          className: cn(className, classNames?.base, {
            "pl-0": !!addonBefore,
            "pr-0": !!addonAfter,
          }),
        })}
      >
        {_renderAddonBefore()}
        {_renderPrefix()}
        <input
          ref={composedRef}
          onChange={handleChange}
          className={styles.input({ class: classNames?.input })}
          {...props}
        />
        {getClear()}
        {getTogglePassword()}
        {_renderSuffix()}
        {_renderAddonAfter()}
      </label>
    )
  },
)

Input.displayName = "Input"

export default Input
