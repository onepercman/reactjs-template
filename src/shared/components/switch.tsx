"use client"

import { Switch as BaseSwitch, SwitchRootProps } from "@ark-ui/react"
import React from "react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const switchVariants = tv({
  base: "inline-flex cursor-pointer items-center gap-2",
  slots: {
    label: "",
    control: [
      "relative flex rounded-full bg-default transition-colors",
      "data-[state=checked]:bg-primary",
    ],
    thumb: [
      "absolute bottom-1 left-1 top-1 aspect-square rounded-full bg-muted transition-all",
      "data-[state=checked]:bg-white",
    ],
  },
  variants: {
    size: {
      xs: {
        label: "text-xs",
        control: "h-4 w-7 text-xs",
        thumb: "data-[state=checked]:left-4",
      },
      sm: {
        label: "text-sm",
        control: "h-5 w-9 text-sm",
        thumb: "data-[state=checked]:left-5",
      },
      md: {
        label: "text-base",
        control: "h-6 w-11 text-base",
        thumb: "data-[state=checked]:left-6",
      },
      lg: {
        label: "text-lg",
        control: "h-8 w-14 text-lg",
        thumb: "data-[state=checked]:left-7",
      },
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

const { withRoot, withSlot } = createComponentFactory(switchVariants)

const Root = withRoot(BaseSwitch.Root)
const RootProvider = withRoot(BaseSwitch.RootProvider)
const Context = withSlot(BaseSwitch.Context)
const Control = withSlot(BaseSwitch.Control)
const HiddenInput = withSlot(BaseSwitch.HiddenInput)
const Label = withSlot(BaseSwitch.Label)
const Thumb = withSlot(BaseSwitch.Thumb)

export interface SwitchProps
  extends SwitchRootProps,
    ComposedTVProps<typeof switchVariants> {
  indeterminate?: boolean
}

export interface Switch extends ComponentMetadata {
  (props: SwitchProps): React.ReactElement | null
}

export const Switch = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  HiddenInput,
  Label,
  Thumb,
})

Switch.displayName = "Switch"
