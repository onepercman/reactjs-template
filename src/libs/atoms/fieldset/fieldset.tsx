import { Fieldset } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { fieldset } from "./variants"

const { withRoot, withSlot } = createComponentFactory(fieldset)

const Root = withRoot(Fieldset.Root)
const RootProvider = withRoot(Fieldset.RootProvider)
const Context = withSlot(Fieldset.Context)
const ErrorText = withSlot(Fieldset.ErrorText)
const HelperText = withSlot(Fieldset.HelperText)
const Legend = withSlot(Fieldset.Legend)

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  ErrorText,
  HelperText,
  Legend,
})

Component.displayName = "Fieldset"
