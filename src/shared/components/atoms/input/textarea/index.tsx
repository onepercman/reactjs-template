import * as Ark from "@ark-ui/react"
import React from "react"
import { LuX } from "react-icons/lu"
import TextAreaAutoSize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize"
import { ComposedTVProps } from "../../types"
import { useComposedRefs } from "../../utils/ref"
import { textarea } from "../../variants"

export interface TextareaProps<AutoSize extends boolean = true>
  extends Omit<
      React.HTMLAttributes<HTMLTextAreaElement>,
      "prefix" | "suffix" | "size"
    >,
    ComposedTVProps<typeof textarea> {
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

    const Component = autoSize ? TextAreaAutoSize : ("textarea" as any)

    return (
      <label
        role="input"
        className={styles.base({ className, class: classNames?.base })}
      >
        <div className={styles.label({ class: classNames?.label })}>
          <span>{label}</span>
          {required ? <span className="text-xs text-error">(*)</span> : null}
        </div>
        <div
          className={styles.group({
            className: addonBefore ? "pl-0" : addonAfter ? "pr-0" : "",
            class: classNames?.group,
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
        </div>
        <Ark.Presence
          className="text-xs text-error animate-in fade-in"
          present={Boolean(invalid && invalidMessage)}
        >
          {invalidMessage}
        </Ark.Presence>
      </label>
    )
  },
)

Textarea.displayName = "Textarea"
