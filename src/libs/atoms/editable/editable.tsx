import { Editable } from "@ark-ui/react"
import { createComponentCtx, createRootComponent } from "../utils"
import { editable } from "./variants"

const { withRoot, withSlot } = createComponentCtx(editable)

const Root = withRoot(Editable.Root)
const RootProvider = withRoot(Editable.RootProvider)
const Context = withSlot(Editable.Context)
const Area = withSlot(Editable.Area)
const CancelTrigger = withSlot(Editable.CancelTrigger)
const Control = withSlot(Editable.Control)
const EditTrigger = withSlot(Editable.EditTrigger)
const Input = withSlot(Editable.Input)
const Label = withSlot(Editable.Label)
const Preview = withSlot(Editable.Preview)
const SubmitTrigger = withSlot(Editable.SubmitTrigger)

export const Component = createRootComponent(Root, {
  Root,
  RootProvider,
  Context,
  Area,
  CancelTrigger,
  Control,
  EditTrigger,
  Input,
  Label,
  Preview,
  SubmitTrigger,
})

Component.displayName = "Editable"
