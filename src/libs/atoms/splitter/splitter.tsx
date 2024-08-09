import { Splitter } from "@ark-ui/react"
import { createCtx, createFactory } from "../utils"
import { splitter } from "./variants"

const { withRoot, withSlot } = createCtx(splitter)

const Root = withRoot(Splitter.Root)
const RootProvider = withRoot(Splitter.RootProvider)
const Context = withSlot(Splitter.Context)
const Panel = withSlot(Splitter.Panel)
const ResizeTrigger = withSlot(Splitter.ResizeTrigger)

export const Component = createFactory(Root, {
  Root,
  RootProvider,
  Context,
  Panel,
  ResizeTrigger,
})

Component.displayName = "Splitter"
