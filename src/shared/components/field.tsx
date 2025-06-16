"use client"

import { Field as BaseField } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const field = tv({
  base: "flex flex-col gap-2",
  slots: {
    label: "font-medium",
    errorText: "text-xs text-error",
    helperText: "",
  },
  variants: {
    size: {
      xs: { label: "text-xs" },
      sm: { label: "text-sm" },
      md: { label: "text-base" },
      lg: { label: "text-lg" },
    },
    invalid: {
      true: {
        label: "text-error",
      },
    },
    required: {
      true: {
        label: "after:ml-1 after:inline after:text-error after:content-['*']",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const { withRoot, withSlot } = createComponentFactory(field)

const Context = withSlot(BaseField.Context)
const ErrorText = withSlot(BaseField.ErrorText, "errorText")
const HelperText = withSlot(BaseField.HelperText, "helperText")
const Input = withSlot(BaseField.Input)
const Label = withSlot(BaseField.Label, "label")
const Root = withRoot(BaseField.Root, "base")
const RootProvider = withSlot(BaseField.RootProvider)
const Select = withSlot(BaseField.Select)
const Textarea = withSlot(BaseField.Textarea)

export interface FieldProps extends ComposedTVProps<typeof field> {}

export interface Field extends ComponentMetadata {
  (props: FieldProps): React.ReactElement | null
}

export const Field = createComponentTree(Root, {
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

Field.displayName = "Field"

export default Field
