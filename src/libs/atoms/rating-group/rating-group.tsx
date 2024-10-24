import { RatingGroup } from "@ark-ui/react"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { ratingGroup } from "./variants"

const { withRoot, withSlot } = createComponentFactory(ratingGroup)

const Root = withRoot(RatingGroup.Root)
const RootProvider = withRoot(RatingGroup.RootProvider)
const Context = withSlot(RatingGroup.Context)
const Control = withSlot(RatingGroup.Control)
const HiddenInput = withSlot(RatingGroup.HiddenInput)
const Item = withSlot(RatingGroup.Item)
const ItemContext = withSlot(RatingGroup.ItemContext)
const Label = withSlot(RatingGroup.Label)

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Context,
  Control,
  HiddenInput,
  Item,
  ItemContext,
  Label,
})

Component.displayName = "RatingGroup"
