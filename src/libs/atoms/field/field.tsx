import { Field, FieldRootProps } from "@ark-ui/react"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils/component-ctx"
import { field } from "./variants"

const { withRoot, withSlot } = createComponentCtx(field)

const Context = withSlot(Field.Context)
const ErrorText = withSlot(Field.ErrorText, "errorText")
const HelperText = withSlot(Field.HelperText, "helperText")
const Input = withSlot(Field.Input)
const Label = withSlot(Field.Label, "label")
const Root = withRoot(Field.Root, "base")
const RootProvider = withSlot(Field.RootProvider)
const Select = withSlot(Field.Select)
const Textarea = withSlot(Field.Textarea)

export interface Field extends ForwardedRefComponent {
  (props: FieldRootProps): React.ReactElement | null
  Context: typeof Context
  ErrorText: typeof ErrorText
  HelperText: typeof HelperText
  Input: typeof Input
  Label: typeof Label
  Root: typeof Root
  RootProvider: typeof RootProvider
  Select: typeof Select
  Textarea: typeof Textarea
}

export const Component = Root as any as Field

Component.displayName = "Field"

Component.Context = Context
Component.ErrorText = ErrorText
Component.HelperText = HelperText
Component.Input = Input
Component.Label = Label
Component.Root = Root
Component.RootProvider = RootProvider
Component.Select = Select
Component.Textarea = Textarea
