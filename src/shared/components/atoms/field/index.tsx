import * as Ark from "@ark-ui/react"
import { createClassContext } from "../utils/class-context"
import { field } from "../variants/field"

const { withClassProvider, withClassContext } = createClassContext(field)

export const Field = {
  Context: Ark.Field.Context,
  ErrorText: withClassContext(Ark.Field.ErrorText, "errorText"),
  HelperText: withClassContext(Ark.Field.HelperText, "helperText"),
  Input: Ark.Field.Input,
  Label: withClassContext(Ark.Field.Label, "label"),
  Root: withClassProvider(Ark.Field.Root, "base"),
  RootProvider: Ark.Field.RootProvider,
  Select: Ark.Field.Select,
  Textarea: Ark.Field.Textarea,
}
