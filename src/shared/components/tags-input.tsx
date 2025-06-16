"use client"

import { TagsInput as BaseTagsInput } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const tagsInput = tv({
  base: "",
})

const { withRoot, withSlot } = createComponentFactory(tagsInput)

const Root = withRoot(BaseTagsInput.Root)
const RootProvider = withRoot(BaseTagsInput.RootProvider)
const ClearTrigger = withSlot(BaseTagsInput.ClearTrigger)
const Context = withSlot(BaseTagsInput.Context)
const Control = withSlot(BaseTagsInput.Control)
const HiddenInput = withSlot(BaseTagsInput.HiddenInput)
const Input = withSlot(BaseTagsInput.Input)
const Item = withSlot(BaseTagsInput.Item)
const ItemContext = withSlot(BaseTagsInput.ItemContext)
const ItemDeleteTrigger = withSlot(BaseTagsInput.ItemDeleteTrigger)
const ItemInput = withSlot(BaseTagsInput.ItemInput)
const ItemText = withSlot(BaseTagsInput.ItemText)
const Label = withSlot(BaseTagsInput.Label)

export interface TagsInputProps extends ComposedTVProps<typeof tagsInput> {}

export interface TagsInput extends ComponentMetadata {
  (props: TagsInputProps): React.ReactElement | null
}

export const TagsInput = createComponentTree(Root, {
  Root,
  RootProvider,
  ClearTrigger,
  Context,
  Control,
  HiddenInput,
  Input,
  Item,
  ItemContext,
  ItemDeleteTrigger,
  ItemInput,
  ItemText,
  Label,
})

TagsInput.displayName = "TagsInput"
