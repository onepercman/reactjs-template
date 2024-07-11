import * as Ark from "@ark-ui/react"
import React from "react"
import { LuCheck, LuChevronsUpDown, LuX } from "react-icons/lu"
import { VariantProps } from "tailwind-variants"
import { Button } from "../button"
import { Input } from "../input"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { combobox, input } from "../variants"

export interface ComboboxOptionProps<Value> {
  label?: React.ReactNode
  children?: ComboboxOptionProps<Value>[]
  offset?: number
  value: Value
}

export interface ComboboxProps<Value>
  extends Omit<
      Ark.ComboboxRootProps<ComboboxOptionProps<Value>>,
      "items" | "color"
    >,
    VariantProps<typeof input>,
    ComposedTVProps<typeof combobox> {
  label?: React.ReactNode
  readonly options?: ComboboxOptionProps<Value>[]
  placeholder?: string
  allowClear?: boolean
  indent?: number
}

export interface Combobox extends ForwardedRefComponent {
  <Value>(props: ComboboxProps<Value>): React.ReactElement | null
}

function _constructor<Value = any>(
  render: (
    props: ComboboxProps<Value>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, ComboboxProps<Value>>(
    render,
  ) as unknown as Combobox
}

function flattenOptions<T>(
  options: ComboboxOptionProps<T>[],
): ComboboxOptionProps<T>[] {
  const result: ComboboxOptionProps<T>[] = []
  function flatten({ children, ...option }: ComboboxOptionProps<T>): void {
    result.push({ ...option })
    if (children?.length) {
      children.forEach(flatten)
    }
  }
  options.forEach(flatten)
  return result
}

export const Combobox = _constructor(function (
  {
    label,
    options = [],
    placeholder,
    size,
    variant,
    allowClear,
    invalid,
    indent = 16,
    className,
    classNames,
    ...props
  },
  ref,
) {
  const styles = combobox({ size })

  function _renderOption(option: ComboboxOptionProps<any>, offset = 0) {
    if (option.children?.length)
      return (
        <Ark.Combobox.ItemGroup
          className={styles.group({ className: classNames?.group })}
        >
          <Ark.Combobox.ItemGroupLabel
            className={styles.groupLabel({ class: classNames?.groupLabel })}
          >
            <span style={{ paddingLeft: offset * indent }}>{option.label}</span>
          </Ark.Combobox.ItemGroupLabel>
          {option.children.map((children) =>
            _renderOption(
              children,
              children.children?.length ? offset + 1 : offset,
            ),
          )}
        </Ark.Combobox.ItemGroup>
      )
    return (
      <Ark.Combobox.Item
        key={option.value}
        item={option}
        className={styles.item({ class: classNames?.item })}
      >
        <Ark.Combobox.ItemText
          className={styles.itemText({ class: classNames?.itemText })}
          style={{ paddingLeft: offset * indent }}
        >
          {option.label}
        </Ark.Combobox.ItemText>
        <Ark.Combobox.ItemIndicator
          className={styles.itemIndicator({
            class: classNames?.itemIndicator,
          })}
        >
          <LuCheck />
        </Ark.Combobox.ItemIndicator>
      </Ark.Combobox.Item>
    )
  }

  return (
    <Ark.Combobox.Root
      ref={ref}
      items={flattenOptions(options)}
      itemToString={(item) => item.label || item.value}
      itemToValue={(item) => item.value}
      unmountOnExit
      positioning={{
        sameWidth: true,
        ...props.positioning,
      }}
      className={styles.base({ className, class: classNames?.base })}
      {...props}
    >
      <Ark.Combobox.Control>
        <Ark.Combobox.Input asChild>
          <Input
            size={size}
            variant={variant}
            className={styles.trigger({ class: classNames?.trigger })}
            placeholder={placeholder}
            invalid={invalid}
            suffix={
              <div className="inline-flex items-center gap-1">
                {allowClear ? (
                  <Ark.Combobox.ClearTrigger>
                    <Button
                      size="xs"
                      variant="default"
                      shape="circle"
                      leftIcon={<LuX />}
                      className={styles.clear({ class: classNames?.clear })}
                    />
                  </Ark.Combobox.ClearTrigger>
                ) : null}
                <Ark.Combobox.Trigger>
                  <LuChevronsUpDown />
                </Ark.Combobox.Trigger>
              </div>
            }
          />
        </Ark.Combobox.Input>
      </Ark.Combobox.Control>
      <Ark.Portal>
        <Ark.Combobox.Positioner>
          <Ark.Combobox.Content
            className={styles.list({ class: classNames?.list })}
          >
            {options.map((option) => _renderOption(option))}
          </Ark.Combobox.Content>
        </Ark.Combobox.Positioner>
      </Ark.Portal>
    </Ark.Combobox.Root>
  )
})

Combobox.displayName = "Combobox"
