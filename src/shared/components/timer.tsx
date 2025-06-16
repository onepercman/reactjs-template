"use client"

import { Timer as BaseTimer } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const timer = tv({
  base: "",
  slots: {},
})

const { withRoot, withSlot } = createComponentFactory(timer)

const Root = withRoot(BaseTimer.Root, "base")
const ActionTrigger = withSlot(BaseTimer.ActionTrigger)
const Area = withSlot(BaseTimer.Area)
const Context = withSlot(BaseTimer.Context)
const Control = withSlot(BaseTimer.Control)
const Item = withSlot(BaseTimer.Item)
const RootProvider = withSlot(BaseTimer.RootProvider)
const Separator = withSlot(BaseTimer.Separator)

export interface TimerProps extends ComposedTVProps<typeof timer> {}

export interface Timer extends ComponentMetadata {
  (props: TimerProps): React.ReactElement | null
}

export const Timer = createComponentTree(Root, {
  Root,
  ActionTrigger,
  Area,
  Context,
  Control,
  Item,
  RootProvider,
  Separator,
})

Timer.displayName = "Timer"
