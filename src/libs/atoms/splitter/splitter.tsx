import { Splitter } from "@ark-ui/react"
import { createComponentCtx, createRootComponent } from "../utils"
import { splitter } from "./variants"

const { withRoot, withSlot } = createComponentCtx(splitter)

const Root = withRoot(Splitter.Root)
const RootProvider = withRoot(Splitter.RootProvider)
const Context = withSlot(Splitter.Context)
const Panel = withSlot(Splitter.Panel)
const ResizeTrigger = withSlot(Splitter.ResizeTrigger)

export const Component = createRootComponent(Root, {
  Root,
  RootProvider,
  Context,
  Panel,
  ResizeTrigger,
})

Component.displayName = "Splitter"
