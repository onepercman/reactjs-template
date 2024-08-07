import { Portal, Select, SelectRootProps } from "@ark-ui/react"
import { CollectionItem } from "node_modules/@ark-ui/react/dist/types"
import React from "react"
import { LuChevronDown } from "react-icons/lu"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { select } from "./variants"

const { withRoot, withSlot } = createComponentCtx(select)

export const RootPrimitive = withRoot(Select.Root)
export const RootProvider = withRoot(Select.RootProvider)
export const Context = withSlot(Select.Context)
export const ItemContext = withSlot(Select.ItemContext)
export const Label = withSlot(Select.Label)
export const Control = withSlot(Select.Control)
export const Trigger = withSlot(Select.Trigger, "trigger")
export const ValueText = withSlot(Select.ValueText, "valueText")
export const ClearTrigger = withSlot(Select.ClearTrigger, "clearTrigger")
export const Indicator = withSlot(Select.Indicator, "indicator")
export const HiddenSelect = withSlot(Select.HiddenSelect)
export const Positioner = withSlot(Select.Positioner)
export const List = withSlot(Select.List)
export const Content = withSlot(Select.Content, "content")
export const ItemGroup = withSlot(Select.ItemGroup, "itemGroup")
export const ItemGroupLabel = withSlot(Select.ItemGroupLabel, "ItemGroupLabel")
export const Item = withSlot(Select.Item, "item")
export const ItemText = withSlot(Select.ItemText, "itemText")
export const ItemIndicator = withSlot(Select.ItemIndicator, "itemIndicator")

export interface SelectProps<T extends CollectionItem>
  extends SelectRootProps<T>,
    ComposedTVProps<typeof select> {
  placeholder?: string
}

export interface Select extends ForwardedRefComponent {
  <T extends CollectionItem>(props: SelectProps<T>): React.ReactElement | null
}

function _constructor<T extends CollectionItem>(
  render: (
    props: SelectProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, SelectProps<T>>(
    render,
  ) as unknown as Select
}

export const Root = _constructor(function (
  { children, placeholder, positioning, className, ...props },
  ref,
) {
  return (
    <RootPrimitive
      ref={ref}
      positioning={{ sameWidth: true, ...positioning }}
      unmountOnExit
      {...props}
    >
      <Control>
        <Trigger className={className}>
          <ValueText placeholder={placeholder} />
          <Indicator asChild>
            <LuChevronDown />
          </Indicator>
        </Trigger>
      </Control>
      <Portal>
        <Positioner>
          <Content>{children}</Content>
        </Positioner>
      </Portal>
      <HiddenSelect />
    </RootPrimitive>
  )
})

Root.displayName = "Root"
