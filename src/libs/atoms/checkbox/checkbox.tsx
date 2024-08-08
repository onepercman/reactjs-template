import { Checkbox, CheckboxRootProps } from "@ark-ui/react"
import React from "react"
import { LuCheck, LuMinus } from "react-icons/lu"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { checkbox } from "./variants"

const { withRoot, withSlot } = createComponentCtx(checkbox)

const Root = withRoot(Checkbox.Root, "base")
const RootProvider = withRoot(Checkbox.RootProvider, "base")
const Context = withSlot(Checkbox.Context)
const Control = withSlot(Checkbox.Control, "control")
const Group = withSlot(Checkbox.Group)
const HiddenInput = withSlot(Checkbox.HiddenInput)
const Indicator = withSlot(Checkbox.Indicator)
const Label = withSlot(Checkbox.Label, "label")

export interface CheckboxProps extends CheckboxRootProps, ComposedTVProps<typeof checkbox> {}

export interface Checkbox extends ForwardedRefComponent {
  (props: CheckboxProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Context: typeof Context
  Control: typeof Control
  Group: typeof Group
  HiddenInput: typeof HiddenInput
  Indicator: typeof Indicator
  Label: typeof Label
}

function _bootstrap(
  render: (props: CheckboxProps, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, CheckboxProps>(render) as unknown as Checkbox
}

export const Component = _bootstrap(function ({ children, ...props }, ref) {
  return (
    <Root ref={ref} {...props}>
      <Label>{children}</Label>
      <Control>
        <Indicator className="m-auto duration-300 data-[state=checked]:animate-in data-[state=unchecked]:animate-out data-[state=checked]:zoom-in data-[state=unchecked]:zoom-out">
          {props.indeterminate ? <LuMinus strokeWidth={6} /> : <LuCheck strokeWidth={4} />}
        </Indicator>
      </Control>
      <HiddenInput />
    </Root>
  )
})

Component.displayName = "Checkbox"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Context = Context
Component.Control = Control
Component.Group = Group
Component.HiddenInput = HiddenInput
Component.Indicator = Indicator
Component.Label = Label
