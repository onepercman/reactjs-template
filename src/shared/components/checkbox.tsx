"use client"

import { Checkbox as BaseCheckbox, CheckboxRootProps } from "@ark-ui/react"
import React from "react"
import { LuMinus } from "react-icons/lu"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"
import { Check } from "./check"

export const checkbox = tv({
  base: "inline-flex cursor-pointer items-center gap-2",
  slots: {
    label: "",
    control: [
      "flex rounded border-2 border-line text-primary transition-colors hover:border-primary",
      "data-[state=checked]:border-primary",
    ],
    indicator: "m-auto",
  },
  variants: {
    size: {
      xs: { label: "text-xs", control: "h-4 w-4 text-xs" },
      sm: { label: "text-sm", control: "h-5 w-5 text-sm" },
      md: { label: "text-base", control: "h-6 w-6 text-base" },
      lg: { label: "text-lg", control: "h-8 w-8 text-lg" },
    },
    indeterminate: {
      true: {
        control:
          "data-[state=checked]:bg-primary data-[state=checked]:text-white",
      },
    },
    placement: {
      head: "flex-row",
      tail: "flex-row-reverse",
    },
  },
  defaultVariants: {
    size: "md",
    placement: "head",
    variant: "outlined",
    color: "primary",
  },
})

const { withRoot, withSlot } = createComponentFactory(checkbox)

const Root = withRoot(BaseCheckbox.Root, "base")
const RootProvider = withRoot(BaseCheckbox.RootProvider, "base")
const Context = withSlot(BaseCheckbox.Context)
const Control = withSlot(BaseCheckbox.Control, "control")
const Group = withSlot(BaseCheckbox.Group)
const HiddenInput = withSlot(BaseCheckbox.HiddenInput)
const Indicator = withSlot(BaseCheckbox.Indicator, "indicator")
const Label = withSlot(BaseCheckbox.Label, "label")

export interface CheckboxProps
  extends CheckboxRootProps,
    ComposedTVProps<typeof checkbox> {}

export interface Checkbox extends ComponentMetadata {
  (props: CheckboxProps): React.ReactElement | null
}

function _bootstrap(
  render: (
    props: CheckboxProps,
    ref: React.ForwardedRef<HTMLLabelElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLLabelElement, CheckboxProps>(render) as Checkbox
}

export const CheckboxCustomRoot = _bootstrap(function (
  { children, ...props },
  ref,
) {
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

export const Checkbox = createComponentTree(CheckboxCustomRoot, {
  Root,
  RootProvider,
  Context,
  Control,
  Group,
  HiddenInput,
  Indicator,
  Label,
})

Checkbox.displayName = "Checkbox"
