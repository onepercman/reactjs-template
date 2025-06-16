"use client"

import { Steps as BaseSteps } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const steps = tv({
  base: "",
  slots: {},
})

const { withRoot, withSlot } = createComponentFactory(steps)

const Root = withRoot(BaseSteps.Root, "base")
const CompletedContent = withSlot(BaseSteps.CompletedContent)
const Content = withSlot(BaseSteps.Content)
const Context = withSlot(BaseSteps.Context)
const Indicator = withSlot(BaseSteps.Indicator)
const Item = withSlot(BaseSteps.Item)
const ItemContext = withSlot(BaseSteps.ItemContext)
const List = withSlot(BaseSteps.List)
const NextTrigger = withSlot(BaseSteps.NextTrigger)
const PrevTrigger = withSlot(BaseSteps.PrevTrigger)
const Progress = withSlot(BaseSteps.Progress)
const Separator = withSlot(BaseSteps.Separator)
const Trigger = withSlot(BaseSteps.Trigger)

export interface StepsProps extends ComposedTVProps<typeof steps> {}

export interface Steps extends ComponentMetadata {
  (props: StepsProps): React.ReactElement | null
}

export const Steps = createComponentTree(Root, {
  Root,
  CompletedContent,
  Content,
  Context,
  Indicator,
  Item,
  ItemContext,
  List,
  NextTrigger,
  PrevTrigger,
  Progress,
  Separator,
  Trigger,
})

Steps.displayName = "Steps"
