import { Checkbox, CheckboxRootProps } from "@ark-ui/react"
import React from "react"
import { LuCheck, LuMinus } from "react-icons/lu"
import { ComposedTVProps } from "../types"
import { createComponentCtx } from "../utils"
import { checkbox } from "./variants"

const { withRoot, withSlot } = createComponentCtx(checkbox)

export const Root = withRoot(Checkbox.Root, "base")
export const RootProvider = withRoot(Checkbox.RootProvider, "base")
export const Context = withSlot(Checkbox.Context)
export const Control = withSlot(Checkbox.Control, "control")
export const Group = withSlot(Checkbox.Group)
export const HiddenInput = withSlot(Checkbox.HiddenInput)
export const Indicator = withSlot(Checkbox.Indicator)
export const Label = withSlot(Checkbox.Label, "label")

export interface CheckboxCompactProps
  extends CheckboxRootProps,
    ComposedTVProps<typeof checkbox> {
  indeterminate?: boolean
}

export const Compact = React.forwardRef<HTMLLabelElement, CheckboxCompactProps>(
  function ({ children, ...props }, ref) {
    return (
      <Root ref={ref} {...props}>
        <Label>{children}</Label>
        <Control>
          <Indicator className="m-auto duration-300 data-[state=checked]:animate-in data-[state=unchecked]:animate-out data-[state=checked]:zoom-in data-[state=unchecked]:zoom-out">
            {props.indeterminate ? (
              <LuMinus strokeWidth={6} />
            ) : (
              <LuCheck strokeWidth={4} />
            )}
          </Indicator>
        </Control>
        <HiddenInput />
      </Root>
    )
  },
)

Compact.displayName = "Checkbox"
