import { FileUpload } from "@ark-ui/react"
import { createCtx, createNested } from "../utils"
import { fileUpload } from "./variants"

const { withRoot, withSlot } = createCtx(fileUpload)

const Root = withRoot(FileUpload.Root)
const RootProvider = withRoot(FileUpload.RootProvider)
const Context = withSlot(FileUpload.Context)
const Dropzone = withSlot(FileUpload.Dropzone)
const HiddenInput = withSlot(FileUpload.HiddenInput)
const Item = withSlot(FileUpload.Item)
const ItemDeleteTrigger = withSlot(FileUpload.ItemDeleteTrigger)
const ItemGroup = withSlot(FileUpload.ItemGroup)
const ItemName = withSlot(FileUpload.ItemName)
const ItemPreview = withSlot(FileUpload.ItemPreview)
const ItemPreviewImage = withSlot(FileUpload.ItemPreviewImage)
const ItemSizeText = withSlot(FileUpload.ItemSizeText)
const Label = withSlot(FileUpload.Label)
const Trigger = withSlot(FileUpload.Trigger)

export const Component = createNested(Root, {
  Root,
  RootProvider,
  Context,
  Dropzone,
  HiddenInput,
  Item,
  ItemDeleteTrigger,
  ItemGroup,
  ItemName,
  ItemPreview,
  ItemPreviewImage,
  ItemSizeText,
  Label,
  Trigger,
})

Component.displayName = "FileUpload"
