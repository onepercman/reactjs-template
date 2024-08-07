import { Combobox, Portal } from "@ark-ui/react"
import React from "react"
import { LuChevronsUpDown } from "react-icons/lu"
import { Input as AtomInput, InputProps } from "../input"
import { createComponentCtx } from "../utils"
import { combobox } from "./variants"

const { withRoot, withSlot } = createComponentCtx(combobox)

export const RootPrimitive = withRoot(Combobox.Root, "base")
export const RootProvider = withRoot(Combobox.RootProvider, "base")
export const Context = withSlot(Combobox.Context)
export const ItemContext = withSlot(Combobox.ItemContext)
export const Label = withSlot(Combobox.Label)
export const Control = withSlot(Combobox.Control)
export const Trigger = withSlot(Combobox.Trigger, "trigger")
export const Input = withSlot(Combobox.Input, "input")
export const ClearTrigger = withSlot(Combobox.ClearTrigger, "clearTrigger")
export const Positioner = withSlot(Combobox.Positioner)
export const List = withSlot(Combobox.List)
export const Content = withSlot(Combobox.Content, "content")
export const ItemGroup = withSlot(Combobox.ItemGroup, "itemGroup")
export const ItemGroupLabel = withSlot(
  Combobox.ItemGroupLabel,
  "ItemGroupLabel",
)
export const Item = withSlot(Combobox.Item, "item")
export const ItemText = withSlot(Combobox.ItemText, "itemText")
export const ItemIndicator = withSlot(Combobox.ItemIndicator, "itemIndicator")

export const Root = React.forwardRef<
  any,
  React.ComponentPropsWithoutRef<typeof RootPrimitive> & {
    placeholder?: string
    renderInput?(props: InputProps): React.ReactNode
  }
>(function (
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
    <RootPrimitive
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
    </RootPrimitive>
  )
})
