"use client"

import { FileUpload as BaseFileUpload } from "@ark-ui/react"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"

export const fileUpload = tv({
  base: "",
})

const { withRoot, withSlot } = createComponentFactory(fileUpload)

const Root = withRoot(BaseFileUpload.Root)
const RootProvider = withRoot(BaseFileUpload.RootProvider)
const Context = withSlot(BaseFileUpload.Context)
const Dropzone = withSlot(BaseFileUpload.Dropzone)
const HiddenInput = withSlot(BaseFileUpload.HiddenInput)
const Item = withSlot(BaseFileUpload.Item)
const ItemDeleteTrigger = withSlot(BaseFileUpload.ItemDeleteTrigger)
const ItemGroup = withSlot(BaseFileUpload.ItemGroup)
const ItemName = withSlot(BaseFileUpload.ItemName)
const ItemPreview = withSlot(BaseFileUpload.ItemPreview)
const ItemPreviewImage = withSlot(BaseFileUpload.ItemPreviewImage)
const ItemSizeText = withSlot(BaseFileUpload.ItemSizeText)
const Label = withSlot(BaseFileUpload.Label)
const Trigger = withSlot(BaseFileUpload.Trigger)

export interface FileUploadProps extends ComposedTVProps<typeof fileUpload> {}

export interface FileUpload extends ComponentMetadata {
  (props: FileUploadProps): React.ReactElement | null
}

export const FileUpload = createComponentTree(Root, {
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

FileUpload.displayName = "FileUpload"
