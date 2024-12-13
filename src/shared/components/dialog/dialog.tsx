"use client"

import { Dialog } from "@ark-ui/react"
import React from "react"
import { LuX } from "react-icons/lu"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { confirm, open } from "./fn"
import { dialog } from "./variants"

const { withRoot, withSlot } = createComponentFactory(dialog)

const Root = withRoot(Dialog.Root)
const RootProvider = withSlot(Dialog.RootProvider)
const Backdrop = withSlot(Dialog.Backdrop, "backdrop")
const Context = withSlot(Dialog.Context)
const Description = withSlot(Dialog.Description, "description")
const Positioner = withSlot(Dialog.Positioner, "positioner")
const Title = withSlot(Dialog.Title, "title")
const Trigger = withSlot(Dialog.Trigger)
const Content = withSlot(Dialog.Content, "content")
const CloseTrigger = withSlot(Dialog.CloseTrigger, "closeTrigger")

const CustomContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(function ({ children, ...props }, ref) {
  return (
    <>
      <Backdrop />
      <Positioner>
        <Content ref={ref} {...props}>
          {children}
        </Content>
      </Positioner>
    </>
  )
})

CustomContent.displayName = "Content"

const CustomCloseTrigger = React.forwardRef<
  React.ElementRef<typeof CloseTrigger>,
  React.ComponentPropsWithoutRef<typeof CloseTrigger>
>(function ({ children, ...props }, ref) {
  return (
    <CloseTrigger ref={ref} asChild {...props}>
      <LuX role="button" className="text-secondary" />
    </CloseTrigger>
  )
})

CustomCloseTrigger.displayName = "CloseTrigger"

export const Component = createComponentTree(Root, {
  Root,
  RootProvider,
  Backdrop,
  Context,
  Description,
  Positioner,
  Title,
  Trigger,
  Content: CustomContent,
  CloseTrigger: CustomCloseTrigger,
  open,
  confirm,
})

Component.displayName = "Dialog"
