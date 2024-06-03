import { menu } from "@/libs/ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"
import { LuChevronRight } from "react-icons/lu"
import { VariantProps } from "tailwind-variants"

export interface MenuOptionProps extends Omit<Ark.MenuItemProps, "children"> {
  label?: React.ReactNode
  children?: MenuOptionProps[]
  items?: MenuOptionProps[]
}

export type MenuOption<IsSeparator extends boolean> = IsSeparator extends true
  ? Ark.Menu.SeparatorProps & { isSeparator: IsSeparator }
  : MenuOptionProps

export interface MenuProps extends Ark.MenuRootProps, VariantProps<typeof menu> {
  readonly options?: Array<MenuOption<true> | MenuOption<false>>
  indent?: number
  className?: string
}

export interface Menu extends ForwardedRefComponent {
  (props: MenuProps): React.ReactElement | null
}

function _constructor(
  render: (props: MenuProps, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, MenuProps>(render) as unknown as Menu
}

export const Menu = _constructor(function ({ children, options = [], indent = 16, size, className, ...props }, ref) {
  const classes = menu({ size })

  function _renderOption(option: MenuOption<true> | MenuOption<false>, offset = 0) {
    if ((option as MenuOption<true>).isSeparator === true) {
      const { isSeparator, className, ...separator } = option as MenuOption<true>
      return <Ark.Menu.Separator className={classes.separator({ className })} {...separator} />
    }
    option = option as MenuOption<false>
    if (option.items?.length)
      return (
        <Ark.Menu.ItemGroup className={classes.group()}>
          <Ark.Menu.ItemGroupLabel className={classes.groupLabel()}>
            <span style={{ paddingLeft: offset * indent }}>{option.label}</span>
          </Ark.Menu.ItemGroupLabel>
          {option.items.map((items) => _renderOption(items, items.items?.length ? offset + 1 : offset))}
        </Ark.Menu.ItemGroup>
      )
    if (option.children?.length)
      return (
        <Ark.Menu.Root>
          <Ark.Menu.TriggerItem className={classes.item()}>
            {option.label} <LuChevronRight />
          </Ark.Menu.TriggerItem>
          <Ark.Portal>
            <Ark.Menu.Positioner>
              <Ark.Menu.Content className={classes.list()}>
                {option.children.map((children) => _renderOption(children))}
              </Ark.Menu.Content>
            </Ark.Menu.Positioner>
          </Ark.Portal>
        </Ark.Menu.Root>
      )
    return (
      <Ark.Menu.Item {...option} className={classes.item()}>
        {option.label}
      </Ark.Menu.Item>
    )
  }

  return (
    <Ark.Menu.Root
      unmountOnExit
      positioning={{
        sameWidth: true,
        ...props.positioning,
      }}
      {...props}
    >
      <Ark.Menu.Trigger asChild>{children}</Ark.Menu.Trigger>
      <Ark.Portal>
        <Ark.Menu.Positioner>
          <Ark.Menu.Content ref={ref} className={classes.list({ className })}>
            {options.map((option) => _renderOption(option))}
          </Ark.Menu.Content>
        </Ark.Menu.Positioner>
      </Ark.Portal>
    </Ark.Menu.Root>
  )
})
