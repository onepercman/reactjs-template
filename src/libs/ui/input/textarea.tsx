import React from "react"
import { LuX } from "react-icons/lu"
import TextAreaAutoSize, { TextareaAutosizeProps } from "react-textarea-autosize"
import { VariantProps, tv } from "tailwind-variants"
import { useComposedRefs } from "../utils/ref"

const textArea = tv({
  base: "flex flex-col gap-1 group",
  slots: {
    label: "text-xs space-y-2 text-secondary",
    group:
      "border-2 rounded px-2 transition-all text-ellipsis inline-flex items-center overflow-hidden cursor-text gap-2 py-2 focus-within:border-primary",
    textarea:
      "grow bg-transparent border-transparent focus:outline-none focus:ring-transparent p-0 self-stretch text-ellipsis h-fit my-auto",
    addonBefore: "rounded-r-none",
    addonAfter: "rounded-l-none",
  },
  variants: {
    size: {
      xs: { group: "min-h-[1.5rem] min-w-[1.5rem] px-2 text-xs" },
      sm: { group: "min-h-[2rem] min-w-[2rem] px-2 text-sm" },
      md: { group: "min-h-[2.5rem] min-w-[2.5rem] px-2" },
      lg: { group: "min-h-[3rem] min-w-[3rem] px-4" },
    },
    variant: {
      filled: { group: "bg-default border-transparent" },
      outlined: { group: "border-2 border-line" },
    },
    invalid: {
      true: {
        group: "border-2 border-error text-error bg-error/10 focus-within:border-error-600",
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

type TextareaVariantProps = VariantProps<typeof textArea>

export interface TextareaProps<AutoSize extends boolean = true>
  extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, "prefix" | "suffix" | "size">,
    TextareaVariantProps {
  autoSize?: AutoSize
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
  autoSizeOptions?: AutoSize extends true ? TextareaAutosizeProps : undefined
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      prefix,
      suffix,
      addonBefore,
      addonAfter,
      variant,
      size,
      invalid,
      clearable,
      autoSize,
      label,
      required,
      invalidMessage,
      autoSizeOptions,
      onChange,
      transform,
      ...props
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null)
    const composedRef = useComposedRefs(ref, internalRef)

    const [showClear, setShowClear] = React.useState(false)

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

    function handleChange(ev: React.ChangeEvent<HTMLTextAreaElement>) {
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

    const classes = textArea({ variant, size, invalid, className })

    const Component = autoSize ? TextAreaAutoSize : ("textarea" as any)

    return (
      <label role="input" className={classes.base({ className })}>
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
          <Component
            ref={composedRef}
            onChange={handleChange}
            className={classes.textarea({ autoSize })}
            {...props}
            {...autoSizeOptions}
          />
          {getClear()}
          {_renderSuffix()}
          {_renderAddonAfter()}
        </div>
        {invalid && invalidMessage ? (
          <div className="text-error animate-in fade-in text-xs">{invalidMessage}</div>
        ) : null}
      </label>
    )
  },
)

Textarea.displayName = "Textarea"
