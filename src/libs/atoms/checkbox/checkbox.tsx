import { Checkbox, CheckboxRootProps } from "@ark-ui/react"
import React from "react"
import { LuMinus } from "react-icons/lu"
import { Check } from "../check"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { createCtx, createNested } from "../utils"
import { checkbox } from "./variants"

const { withRoot, withSlot } = createCtx(checkbox)

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

export interface Checkbox extends ForwardedRefComponent {
  (props: CheckboxProps): React.ReactElement | null
}

function _bootstrap(
  render: (
    props: CheckboxProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, CheckboxProps>(
    render,
  ) as unknown as Checkbox
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

export const Component = createNested(CustomRoot, {
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
