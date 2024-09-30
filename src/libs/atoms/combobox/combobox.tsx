import {
  CollectionItem,
  Combobox,
  ComboboxRootProps,
  createListCollection,
  Portal,
} from "@ark-ui/react"
import React from "react"
import { LuChevronsUpDown } from "react-icons/lu"
import { Input as AtomInput, InputProps } from "../input"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { createCtx, createNested } from "../utils"
import { combobox } from "./variants"

const { withRoot, withSlot } = createCtx(combobox)

const Root = withRoot(Combobox.Root, "base")
const RootProvider = withRoot(Combobox.RootProvider, "base")
const Context = withSlot(Combobox.Context)
const ItemContext = withSlot(Combobox.ItemContext)
const Label = withSlot(Combobox.Label)
const Control = withSlot(Combobox.Control)
const Trigger = withSlot(Combobox.Trigger, "trigger")
const Input = withSlot(Combobox.Input, "input")
const ClearTrigger = withSlot(Combobox.ClearTrigger, "clearTrigger")
const Positioner = withSlot(Combobox.Positioner)
const List = withSlot(Combobox.List)
const Content = withSlot(Combobox.Content, "content")
const ItemGroup = withSlot(Combobox.ItemGroup, "itemGroup")
const ItemGroupLabel = withSlot(Combobox.ItemGroupLabel, "ItemGroupLabel")
const Item = withSlot(Combobox.Item, "item")
const ItemText = withSlot(Combobox.ItemText, "itemText")
const ItemIndicator = withSlot(Combobox.ItemIndicator, "itemIndicator")

export interface ComboboxProps<T extends CollectionItem>
  extends ComboboxRootProps<T>,
    ComposedTVProps<typeof combobox> {
  placeholder?: string
  renderInput?(props: InputProps): React.ReactNode
}

export interface Combobox extends ForwardedRefComponent {
  <T extends CollectionItem>(props: ComboboxProps<T>): React.ReactElement | null
}

function _bootstrap<T extends CollectionItem>(
  render: (
    props: ComboboxProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, ComboboxProps<T>>(
    render,
  ) as unknown as Combobox
}

export const CustomRoot = _bootstrap(function (
  {
    children,
    placeholder,
    invalid,
    positioning,
    renderInput = function (props) {
      return (
        <AtomInput
          addonAfter={
            <Trigger>
              <LuChevronsUpDown />
            </Trigger>
          }
          {...props}
        />
      )
    },
    ...props
  },
  ref,
) {
  return (
    <Root
      ref={ref}
      unmountOnExit
      positioning={{ sameWidth: true, ...positioning }}
      {...props}
    >
      <Control>
        <Input asChild>{renderInput({ placeholder })}</Input>
      </Control>
      <Portal>
        <Positioner>
          <Content>{children}</Content>
        </Positioner>
      </Portal>
    </Root>
  )
})

export const Component = createNested(CustomRoot, {
  Root: Root as Combobox,
  RootProvider,
  Context,
  ItemContext,
  Label,
  Control,
  Trigger,
  Input,
  ClearTrigger,
  Positioner,
  List,
  Content,
  ItemGroup,
  ItemGroupLabel,
  Item,
  ItemText,
  ItemIndicator,
  createListCollection,
})

Component.displayName = "Combobox"
