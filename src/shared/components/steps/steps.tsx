import { Steps } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { steps } from "./variants"

const { withRoot, withSlot } = createComponentFactory(steps)

const Root = withRoot(Steps.Root, "base")
const CompletedContent = withSlot(Steps.CompletedContent)
const Content = withSlot(Steps.Content)
const Context = withSlot(Steps.Context)
const Indicator = withSlot(Steps.Indicator)
const Item = withSlot(Steps.Item)
const ItemContext = withSlot(Steps.ItemContext)
const List = withSlot(Steps.List)
const NextTrigger = withSlot(Steps.NextTrigger)
const PrevTrigger = withSlot(Steps.PrevTrigger)
const Progress = withSlot(Steps.Progress)
const Separator = withSlot(Steps.Separator)
const Trigger = withSlot(Steps.Trigger)

export const Component = createComponentTree(Root, {
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

Component.displayName = "Steps"
