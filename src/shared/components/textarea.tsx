"use client"

import React from "react"
import { LuX } from "react-icons/lu"
import TextAreaAutoSize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize"
import { cn, ComposedTVProps, forwardRef } from "react-tvcx"
import { tv } from "tailwind-variants"
import { useComposedRefs } from "use-composed-refs"

export const textarea = tv({
  base: [
    "inline-flex cursor-text items-center gap-2 overflow-hidden text-ellipsis rounded border-2 px-2 py-2 transition-all",
    "focus-within:border-primary",
  ],
  slots: {
    textarea: [
      "my-auto h-fit grow self-stretch text-ellipsis border-transparent bg-transparent p-0",
      "focus:outline-none focus:ring-transparent",
    ],
    addonBefore: "rounded-r-none",
    addonAfter: "rounded-l-none",
  },
  variants: {
    size: {
      xs: "min-h-[1.5rem] min-w-[1.5rem] px-2 text-xs",
      sm: "min-h-[2rem] min-w-[2rem] px-2 text-sm",
      md: "min-h-[2.5rem] min-w-[2.5rem] px-2",
      lg: "min-h-[3rem] min-w-[3rem] px-4",
    },
    variant: {
      filled: "border-transparent bg-default",
      outlined: "border-2 border-line",
    },
    invalid: {
      true: {
        base: "border-2 border-error bg-error/10 text-error focus-within:border-error-600",
        label: "text-error",
      },
    },
    autoSize: {
      true: { textarea: "resize-none" },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
})

export interface TextareaProps<AutoSize extends boolean = true>
  extends ComposedTVProps<typeof textarea> {
  autoSize?: AutoSize
  prefix?: React.ReactNode | React.ReactElement
  suffix?: React.ReactNode | React.ReactElement
  addonBefore?: React.ReactNode | React.ReactElement
  addonAfter?: React.ReactNode | React.ReactElement
  clearable?: boolean
  transform?(value: string): string
  autoSizeOptions?: AutoSize extends true ? TextareaAutosizeProps : undefined
}

export const Textarea = forwardRef<"textarea", TextareaProps>(
  (
    {
      as: Comp = "textarea",
      prefix,
      suffix,
      addonBefore,
      addonAfter,
      variant,
      size,
      invalid,
      clearable,
      autoSize,
      autoSizeOptions,
      onChange,
      transform,
      className,
      classNames,
      ...props
    },
    ref,
  ) => {
    const styles = textarea({ variant, size, invalid, className })

    const internalRef = React.useRef<HTMLTextAreaElement>(null)
    const composedRef = useComposedRefs(ref, internalRef)

    const [showClear, setShowClear] = React.useState(false)

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
                if (onChange) onChange(event)
              }
            }}
          />
        )
      }
    }

    function handleChange(ev: React.ChangeEvent<HTMLTextAreaElement>) {
      if (transform && internalRef.current) {
        internalRef.current.value = transform(internalRef.current.value)
      }
      if (onChange) onChange(ev)
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

    const Component = autoSize ? TextAreaAutoSize : (Comp as any)

    return (
      <label
        role="input"
        className={styles.base({
          className: cn(className, classNames?.base, {
            "pl-0": addonBefore,
            "pr-0": addonAfter,
          }),
        })}
      >
        {_renderAddonBefore()}
        {_renderPrefix()}
        <Component
          ref={composedRef}
          onChange={handleChange}
          className={styles.textarea({
            autoSize,
            class: classNames?.textarea,
          })}
          {...props}
          {...autoSizeOptions}
        />
        {getClear()}
        {_renderSuffix()}
        {_renderAddonAfter()}
      </label>
    )
  },
)

Textarea.displayName = "Textarea"
