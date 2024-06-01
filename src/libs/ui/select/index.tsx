import { Select as ArkSelect, Portal, SelectRootProps } from "@ark-ui/react"
import React from "react"
import { HiCheck, HiChevronDown, HiX } from "react-icons/hi"
import { Button, ButtonVariantProps } from "../button"
import { select } from "./select"

export interface SelectOptionProps<Value> {
  label?: React.ReactNode
  children?: SelectOptionProps<Value>[]
  offset?: number
  value: Value
}

export interface SelectProps<Value>
  extends Omit<SelectRootProps<SelectOptionProps<Value>>, "items" | "color">,
    ButtonVariantProps {
  label?: React.ReactNode
  readonly options?: SelectOptionProps<Value>[]
  placeholder?: string
  allowClear?: boolean
  invalid?: boolean
  invalidMessage?: React.ReactNode
  indent?: number
}

export interface Select extends ForwardedRefComponent {
  <Value>(props: SelectProps<Value>): React.ReactElement | null
}

function _constructor<Value = any>(
  render: (props: SelectProps<Value>, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, SelectProps<Value>>(render) as unknown as Select
}

function flattenOptions<T>(options: SelectOptionProps<T>[]): SelectOptionProps<T>[] {
  const result: SelectOptionProps<T>[] = []
  function flatten({ children, ...option }: SelectOptionProps<T>): void {
    result.push({ ...option })
    if (children?.length) {
      children.forEach(flatten)
    }
  }
  options.forEach(flatten)
  return result
}

export const Select = _constructor(function (
  {
    label,
    options = [],
    placeholder,
    size,
    variant,
    color,
    allowClear,
    className,
    invalid,
    invalidMessage,
    indent = 16,
    ...props
  },
  ref,
) {
  const classes = select({ invalid })

  function _renderOption(option: SelectOptionProps<any>, offset = 0) {
    if (option.children?.length)
      return (
        <ArkSelect.ItemGroup className={classes.group()}>
          <ArkSelect.ItemGroupLabel className={classes.groupLabel()}>
            <span style={{ paddingLeft: offset * indent }}>{option.label}</span>
          </ArkSelect.ItemGroupLabel>
          {option.children.map((children) => _renderOption(children, children.children?.length ? offset + 1 : offset))}
        </ArkSelect.ItemGroup>
      )
    return (
      <ArkSelect.Item key={option.value} item={option} className={classes.item()}>
        <ArkSelect.ItemText className={classes.itemText()} style={{ paddingLeft: offset * indent }}>
          {option.label}
        </ArkSelect.ItemText>
        <ArkSelect.ItemIndicator className={classes.itemIndicator()}>
          <HiCheck className="inline" />
        </ArkSelect.ItemIndicator>
      </ArkSelect.Item>
    )
  }

  return (
    <ArkSelect.Root
      ref={ref}
      items={flattenOptions(options)}
      itemToValue={(item) => item.children || item.value}
      positioning={{
        sameWidth: true,
        ...props.positioning,
      }}
      className={classes.base({ className })}
      {...props}
    >
      <ArkSelect.Label className={classes.label()}>{label}</ArkSelect.Label>
      <ArkSelect.Control>
        <ArkSelect.Trigger asChild>
          <Button
            size={size}
            variant={variant}
            color={color}
            className={classes.trigger()}
            rightIcon={
              <div className="inline-flex items-center gap-1">
                <ArkSelect.ClearTrigger asChild hidden={!allowClear}>
                  <Button size="xs" variant="default" shape="circle" leftIcon={<HiX />} className={classes.clear()} />
                </ArkSelect.ClearTrigger>
                <ArkSelect.Indicator>
                  <HiChevronDown />
                </ArkSelect.Indicator>
              </div>
            }
          >
            <ArkSelect.ValueText placeholder={placeholder} />
          </Button>
        </ArkSelect.Trigger>
      </ArkSelect.Control>
      {invalid && invalidMessage ? <div className="text-error animate-in fade-in text-xs">{invalidMessage}</div> : null}
      <Portal>
        <ArkSelect.Positioner>
          <ArkSelect.Content className={classes.list()}>
            {options.map((option) => _renderOption(option))}
          </ArkSelect.Content>
        </ArkSelect.Positioner>
      </Portal>
      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  )
})
