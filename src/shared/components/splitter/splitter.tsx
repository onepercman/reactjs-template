import { Splitter } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { splitter } from "./variants"

const { withRoot, withSlot } = createComponentFactory(splitter)

const Root = withRoot(Splitter.Root)
const RootProvider = withRoot(Splitter.RootProvider)
const Context = withSlot(Splitter.Context)
const Panel = withSlot(Splitter.Panel)
const ResizeTrigger = withSlot(Splitter.ResizeTrigger)

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Panel,
  ResizeTrigger,
})

Component.displayName = "Splitter"
