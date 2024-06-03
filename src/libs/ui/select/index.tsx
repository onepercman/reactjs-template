import { Button, ButtonVariantProps } from "@/libs/ui/button"
import * as Ark from "@ark-ui/react"
import React, { Fragment } from "react"
import { LuCheck, LuChevronDown, LuX } from "react-icons/lu"
import { tv } from "tailwind-variants"

export const select = tv({
  base: "flex flex-col gap-1 w-fit",
  slots: {
    label: "text-sm text-secondary",
    trigger:
      "min-w-full justify-between data-[placeholder-shown]:text-secondary data-[placeholder-shown]:font-normal relative",
    clear: "text-secondary text-xs absolute top-1/2 right-3 -translate-y-1/2",
    list: "flex flex-col border border-line w-full rounded overflow-hidden bg-component shadow-lg p-1 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out",
    group: "flex flex-col",
    groupLabel: "w-full px-2 py-1 text-xs text-secondary",
    item: "inline-flex relative gap-2 justify-between items-start cursor-pointer hover:bg-default pl-3 py-2 pr-8 rounded",
    itemText: "grow",
    itemIndicator: "h-full absolute right-2 top-0 data-[state=checked]:flex items-center",
  },
  variants: {
    size: {
      xs: { item: "text-xs py-1" },
      sm: { item: "text-sm py-1" },
      md: { item: "text-base" },
      lg: { item: "text-lg" },
    },
    invalid: {
      true: {
        label: "text-error",
        trigger: "bg-error/10 border-error border-2 !text-error",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface SelectOptionProps<Value> {
  label?: React.ReactNode
  children?: SelectOptionProps<Value>[]
  offset?: number
  value: Value
}

export interface SelectProps<Value>
  extends Omit<Ark.SelectRootProps<SelectOptionProps<Value>>, "items" | "color">,
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
  const classes = select({ invalid, size })

  function _renderOption(option: SelectOptionProps<any>, offset = 0) {
    if (option.children?.length)
      return (
        <Ark.Select.ItemGroup className={classes.group()}>
          <Ark.Select.ItemGroupLabel className={classes.groupLabel()}>
            <span style={{ paddingLeft: offset * indent }}>{option.label}</span>
          </Ark.Select.ItemGroupLabel>
          {option.children.map((children) => _renderOption(children, children.children?.length ? offset + 1 : offset))}
        </Ark.Select.ItemGroup>
      )
    return (
      <Ark.Select.Item key={option.value} item={option} className={classes.item()}>
        <Ark.Select.ItemText className={classes.itemText()} style={{ paddingLeft: offset * indent }}>
          {option.label}
        </Ark.Select.ItemText>
        <Ark.Select.ItemIndicator className={classes.itemIndicator()}>
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
      className={classes.base({ className })}
      {...props}
    >
      <Ark.Select.Label className={classes.label()}>{label}</Ark.Select.Label>
      <Ark.Select.Control>
        <Ark.Select.Trigger asChild>
          <Button
            size={size}
            variant={variant}
            color={color}
            className={classes.trigger()}
            rightIcon={
              <Fragment>
                {allowClear ? (
                  <Ark.Select.ClearTrigger>
                    <Button size="xs" variant="default" shape="circle" leftIcon={<LuX />} className={classes.clear()} />
                  </Ark.Select.ClearTrigger>
                ) : null}
                <Ark.Select.Indicator>
                  <LuChevronDown />
                </Ark.Select.Indicator>
              </Fragment>
            }
          >
            <Ark.Select.ValueText placeholder={placeholder} />
          </Button>
        </Ark.Select.Trigger>
      </Ark.Select.Control>
      <Ark.Presence className="text-error animate-in fade-in text-xs" present={Boolean(invalid && invalidMessage)}>
        {invalidMessage}
      </Ark.Presence>
      <Ark.Portal>
        <Ark.Select.Positioner>
          <Ark.Select.Content className={classes.list()}>
            {options.map((option) => _renderOption(option))}
          </Ark.Select.Content>
        </Ark.Select.Positioner>
      </Ark.Portal>
      <Ark.Select.HiddenSelect />
    </Ark.Select.Root>
  )
})
