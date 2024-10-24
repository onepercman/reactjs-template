import { Checkbox, CheckboxRootProps } from "@ark-ui/react"
import React from "react"
import { LuMinus } from "react-icons/lu"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { Check } from "../check"
import { checkbox } from "./variants"

const { withRoot, withSlot } = createComponentFactory(checkbox)

const Root = withRoot(Checkbox.Root, "base")
const RootProvider = withRoot(Checkbox.RootProvider, "base")
const Context = withSlot(Checkbox.Context)
const Control = withSlot(Checkbox.Control, "control")
const Group = withSlot(Checkbox.Group)
const HiddenInput = withSlot(Checkbox.HiddenInput)
const Indicator = withSlot(Checkbox.Indicator, "indicator")
const Label = withSlot(Checkbox.Label, "label")

export interface CheckboxProps
  extends CheckboxRootProps,
    ComposedTVProps<typeof checkbox> {}

export interface Checkbox extends ComponentMetadata {
  (props: CheckboxProps): React.ReactElement | null
}

function _bootstrap(
  render: (
    props: CheckboxProps,
    ref: React.ForwardedRef<React.ElementRef<Checkbox>>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<React.ElementRef<Checkbox>, CheckboxProps>(
    render,
  ) as Checkbox
}

export const CustomRoot = _bootstrap(function ({ children, ...props }, ref) {
  return (
    <Root ref={ref} {...props}>
      <Context>
        {({ checked }) => (
          <>
            <Label>{children}</Label>
            <Control>
              <Indicator>
                {checked ? (
                  props.indeterminate ? (
                    <LuMinus strokeWidth={6} />
                  ) : (
                    <Check />
                  )
                ) : null}
              </Indicator>
            </Control>
            <HiddenInput />
          </>
        )}
      </Context>
    </Root>
  )
})

export const Component = createComponentTree(CustomRoot, {
  Root,
  RootProvider,
  Context,
  Control,
  Group,
  HiddenInput,
  Indicator,
  Label,
})

Component.displayName = "Checkbox"
