"use client"

import { Fieldset as BaseFieldset } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const fieldset = tv({
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

const { withRoot, withSlot } = createComponentFactory(fieldset)

const Root = withRoot(BaseFieldset.Root)
const RootProvider = withRoot(BaseFieldset.RootProvider)
const Context = withSlot(BaseFieldset.Context)
const ErrorText = withSlot(BaseFieldset.ErrorText)
const HelperText = withSlot(BaseFieldset.HelperText)
const Legend = withSlot(BaseFieldset.Legend)

export interface FieldsetProps extends ComposedTVProps<typeof fieldset> {}

export interface Fieldset extends ComponentMetadata {
  (props: FieldsetProps): React.ReactElement | null
}

export const Fieldset = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  ErrorText,
  HelperText,
  Legend,
})

Fieldset.displayName = "Fieldset"

export default Fieldset
