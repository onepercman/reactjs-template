import { TagsInput } from "@ark-ui/react"
import { createCtx, createFactory } from "../utils"
import { tagsInput } from "./variants"

const { withRoot, withSlot } = createCtx(tagsInput)

const Root = withRoot(TagsInput.Root)
const RootProvider = withRoot(TagsInput.RootProvider)
const Context = withSlot(TagsInput.Context)
const ClearTrigger = withSlot(TagsInput.ClearTrigger)
const Control = withSlot(TagsInput.Control)
const HiddenInput = withSlot(TagsInput.HiddenInput)
const Input = withSlot(TagsInput.Input)
const Item = withSlot(TagsInput.Item)
const ItemContext = withSlot(TagsInput.ItemContext)
const ItemDeleteTrigger = withSlot(TagsInput.ItemDeleteTrigger)
const ItemInput = withSlot(TagsInput.ItemInput)
const ItemPreview = withSlot(TagsInput.ItemPreview)
const ItemText = withSlot(TagsInput.ItemText)
const Label = withSlot(TagsInput.Label)

export const Component = createFactory(Root, {
  Root,
  RootProvider,
  Context,
  ClearTrigger,
  Control,
  HiddenInput,
  Input,
  Item,
  ItemContext,
  ItemDeleteTrigger,
  ItemInput,
  ItemPreview,
  ItemText,
  Label,
})

Component.displayName = "TagsInput"
