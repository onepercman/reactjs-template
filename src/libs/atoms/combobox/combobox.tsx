import { Combobox, ComboboxRootProps, Portal } from "@ark-ui/react"
import { CollectionItem } from "node_modules/@ark-ui/react/dist/types"
import React from "react"
import { LuChevronsUpDown } from "react-icons/lu"
import { Input as AtomInput, InputProps } from "../input"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { combobox } from "./variants"

const { withRoot, withSlot } = createComponentCtx(combobox)

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
  Root: typeof Root
  RootProvider: typeof RootProvider
  Context: typeof Context
  ItemContext: typeof ItemContext
  Label: typeof Label
  Control: typeof Control
  Trigger: typeof Trigger
  Input: typeof Input
  ClearTrigger: typeof ClearTrigger
  Positioner: typeof Positioner
  List: typeof List
  Content: typeof Content
  ItemGroup: typeof ItemGroup
  ItemGroupLabel: typeof ItemGroupLabel
  Item: typeof Item
  ItemText: typeof ItemText
  ItemIndicator: typeof ItemIndicator
}

function _bootstrap<T extends CollectionItem>(
  render: (props: ComboboxProps<T>, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, ComboboxProps<T>>(render) as unknown as Combobox
}

export const Component = _bootstrap(function (
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
    <Root ref={ref} unmountOnExit positioning={{ sameWidth: true, ...positioning }} {...props}>
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

Component.displayName = "Combobox"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Context = Context
Component.ItemContext = ItemContext
Component.Label = Label
Component.Control = Control
Component.Trigger = Trigger
Component.Input = Input
Component.ClearTrigger = ClearTrigger
Component.Positioner = Positioner
Component.List = List
Component.Content = Content
Component.ItemGroup = ItemGroup
Component.ItemGroupLabel = ItemGroupLabel
Component.Item = Item
Component.ItemText = ItemText
Component.ItemIndicator = ItemIndicator
