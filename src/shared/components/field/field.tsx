"use client"

import { Field } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { field } from "./variants"

const { withRoot, withSlot } = createComponentFactory(field)

const Context = withSlot(Field.Context)
const ErrorText = withSlot(Field.ErrorText, "errorText")
const HelperText = withSlot(Field.HelperText, "helperText")
const Input = withSlot(Field.Input)
const Label = withSlot(Field.Label, "label")
const Root = withRoot(Field.Root, "base")
const RootProvider = withSlot(Field.RootProvider)
const Select = withSlot(Field.Select)
const Textarea = withSlot(Field.Textarea)

export const Component = createComponentTree(Root, {
  Context,
  ErrorText,
  HelperText,
  Input,
  Label,
  Root,
  RootProvider,
  Select,
  Textarea,
})

Component.displayName = "Field"
