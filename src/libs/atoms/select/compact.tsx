import * as Ark from "@ark-ui/react"
import React, { Fragment } from "react"
import { LuCheck, LuX } from "react-icons/lu"
import { RiArrowDownSFill } from "react-icons/ri"
import { Button, button, ButtonBaseProps } from "../button"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { select } from "./variants"

export interface SelectOptionProps<Value> {
  label?: React.ReactNode
  children?: SelectOptionProps<Value>[]
  offset?: number
  value: Value
}

export interface SelectProps<Value>
  extends Omit<
      Ark.SelectRootProps<SelectOptionProps<Value>>,
      "items" | "value" | "defaultValue" | "color"
    >,
    ComposedTVProps<typeof select>,
    ComposedTVProps<typeof button>,
    ButtonBaseProps {
  value?: Value[]
  defaultValue?: Value[]
  label?: React.ReactNode
  readonly options?: SelectOptionProps<Value>[]
  placeholder?: string
  allowClear?: boolean
  indent?: number
}

export interface Select extends ForwardedRefComponent {
  <Value>(props: SelectProps<Value>): React.ReactElement | null
}

function _constructor<Value = any>(
  render: (
    props: SelectProps<Value>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, SelectProps<Value>>(
    render,
  ) as unknown as Select
}

function flattenOptions<T>(
  options: SelectOptionProps<T>[],
): SelectOptionProps<T>[] {
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
    leftIcon,
    rightIcon,
    allowClear,
    invalid,
    indent = 16,
    className,
    classNames,
    ...props
  },
  ref,
) {
  const styles = select({ invalid, size })

  function _renderOption(option: SelectOptionProps<any>, offset = 0) {
    if (option.children?.length)
      return (
        <Ark.Select.ItemGroup
          className={styles.group({ class: classNames?.group })}
        >
          <Ark.Select.ItemGroupLabel
            className={styles.groupLabel({ class: classNames?.groupLabel })}
          >
            <span style={{ paddingLeft: offset * indent }}>{option.label}</span>
          </Ark.Select.ItemGroupLabel>
          {option.children.map((children) =>
            _renderOption(
              children,
              children.children?.length ? offset + 1 : offset,
            ),
          )}
        </Ark.Select.ItemGroup>
      )
    return (
      <Ark.Select.Item
        key={option.value}
        item={option}
        className={styles.item({ class: classNames?.item })}
      >
        <Ark.Select.ItemText
          className={styles.itemText({ class: classNames?.itemText })}
          style={{ paddingLeft: offset * indent }}
        >
          {option.label}
        </Ark.Select.ItemText>
        <Ark.Select.ItemIndicator
          className={styles.itemIndicator({
            class: classNames?.itemIndicator,
          })}
        >
          <LuCheck />
        </Ark.Select.ItemIndicator>
      </Ark.Select.Item>
    )
  }

  return (
    <Ark.Select.Root
      ref={ref}
      items={flattenOptions(options)}
      itemToString={(item) => item.label || item.value}
      itemToValue={(item) => item.value}
      unmountOnExit
      positioning={{
        sameWidth: true,
        ...props.positioning,
      }}
      className={styles.base({ class: classNames?.base })}
      {...props}
    >
      <Ark.Select.Control>
        <Ark.Select.Trigger asChild>
          <Button
            size={size}
            variant={variant}
            color={color}
            className={styles.trigger({
              className,
              class: classNames?.trigger,
            })}
            leftIcon={leftIcon}
            rightIcon={
              <Fragment>
                {allowClear ? (
                  <Ark.Select.ClearTrigger>
                    <Button
                      size="xs"
                      variant="default"
                      shape="circle"
                      leftIcon={<LuX />}
                      className={styles.clear({ class: classNames?.clear })}
                    />
                  </Ark.Select.ClearTrigger>
                ) : null}
                <Ark.Select.Indicator>
                  <RiArrowDownSFill />
                </Ark.Select.Indicator>
              </Fragment>
            }
          >
            <Ark.Select.ValueText placeholder={placeholder} />
          </Button>
        </Ark.Select.Trigger>
      </Ark.Select.Control>
      <Ark.Portal>
        <Ark.Select.Positioner>
          <Ark.Select.Content
            className={styles.list({ class: classNames?.list })}
          >
            {options.map((option) => _renderOption(option))}
          </Ark.Select.Content>
        </Ark.Select.Positioner>
      </Ark.Portal>
      <Ark.Select.HiddenSelect />
    </Ark.Select.Root>
  )
})

Select.displayName = "Select"
