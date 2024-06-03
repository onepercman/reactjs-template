import { Button } from "@/libs/ui/button"
import { Input } from "@/libs/ui/input"
import { InputVariantProps, combobox } from "@/libs/ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"
import { LuCheck, LuChevronsUpDown, LuX } from "react-icons/lu"

export interface ComboboxOptionProps<Value> {
  label?: React.ReactNode
  children?: ComboboxOptionProps<Value>[]
  offset?: number
  value: Value
}

export interface ComboboxProps<Value>
  extends Omit<Ark.ComboboxRootProps<ComboboxOptionProps<Value>>, "items" | "color">,
    InputVariantProps {
  label?: React.ReactNode
  readonly options?: ComboboxOptionProps<Value>[]
  placeholder?: string
  allowClear?: boolean
  invalid?: boolean
  invalidMessage?: React.ReactNode
  indent?: number
}

export interface Combobox extends ForwardedRefComponent {
  <Value>(props: ComboboxProps<Value>): React.ReactElement | null
}

function _constructor<Value = any>(
  render: (props: ComboboxProps<Value>, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, ComboboxProps<Value>>(render) as unknown as Combobox
}

function flattenOptions<T>(options: ComboboxOptionProps<T>[]): ComboboxOptionProps<T>[] {
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
    className,
    invalid,
    invalidMessage,
    indent = 16,
    ...props
  },
  ref,
) {
  const classes = combobox({ size })

  function _renderOption(option: ComboboxOptionProps<any>, offset = 0) {
    if (option.children?.length)
      return (
        <Ark.Combobox.ItemGroup className={classes.group()}>
          <Ark.Combobox.ItemGroupLabel className={classes.groupLabel()}>
            <span style={{ paddingLeft: offset * indent }}>{option.label}</span>
          </Ark.Combobox.ItemGroupLabel>
          {option.children.map((children) => _renderOption(children, children.children?.length ? offset + 1 : offset))}
        </Ark.Combobox.ItemGroup>
      )
    return (
      <Ark.Combobox.Item key={option.value} item={option} className={classes.item()}>
        <Ark.Combobox.ItemText className={classes.itemText()} style={{ paddingLeft: offset * indent }}>
          {option.label}
        </Ark.Combobox.ItemText>
        <Ark.Combobox.ItemIndicator className={classes.itemIndicator()}>
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
      className={classes.base({ className })}
      {...props}
    >
      <Ark.Combobox.Label className={classes.label()}>{label}</Ark.Combobox.Label>
      <Ark.Combobox.Control>
        <Ark.Combobox.Input asChild>
          <Input
            size={size}
            variant={variant}
            className={classes.trigger()}
            placeholder={placeholder}
            invalid={invalid}
            invalidMessage={invalidMessage}
            suffix={
              <div className="inline-flex items-center gap-1">
                {allowClear ? (
                  <Ark.Combobox.ClearTrigger>
                    <Button size="xs" variant="default" shape="circle" leftIcon={<LuX />} className={classes.clear()} />
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
          <Ark.Combobox.Content className={classes.list()}>
            {options.map((option) => _renderOption(option))}
          </Ark.Combobox.Content>
        </Ark.Combobox.Positioner>
      </Ark.Portal>
    </Ark.Combobox.Root>
  )
})
