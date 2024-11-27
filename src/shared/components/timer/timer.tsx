"use client"

import { Timer } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { timer } from "./variants"

const { withRoot, withSlot } = createComponentFactory(timer)

const Root = withRoot(Timer.Root, "base")
const ActionTrigger = withSlot(Timer.ActionTrigger)
const Area = withSlot(Timer.Area)
const Context = withSlot(Timer.Context)
const Control = withSlot(Timer.Control)
const Item = withSlot(Timer.Item)
const RootProvider = withSlot(Timer.RootProvider)
const Separator = withSlot(Timer.Separator)

export const Component = createComponentTree(Root, {
  Root,
  ActionTrigger,
  Area,
  Context,
  Control,
  Item,
  RootProvider,
  Separator,
})

Component.displayName = "Timer"
