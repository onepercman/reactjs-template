import * as Ark from "@ark-ui/react"
import { createComponentCtx } from "../utils/component-ctx"
import { field } from "../variants/field"

const { withRoot, withSlot } = createComponentCtx(field)

export const Context = withSlot(Ark.Field.Context)
export const ErrorText = withSlot(Ark.Field.ErrorText, "errorText")
export const HelperText = withSlot(Ark.Field.HelperText, "helperText")
export const Input = withSlot(Ark.Field.Input)
export const Label = withSlot(Ark.Field.Label, "label")
export const Root = withRoot(Ark.Field.Root, "base")
export const RootProvider = withSlot(Ark.Field.RootProvider)
export const Select = withSlot(Ark.Field.Select)
export const Textarea = withSlot(Ark.Field.Textarea)
