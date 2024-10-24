import { Dialog, Portal } from "@ark-ui/react"
import React from "react"
import { LuX } from "react-icons/lu"
import { createComponentTree, createCtx } from "../utils"
import { confirm, open } from "./fn"
import { dialog } from "./variants"

const { withRoot, withSlot } = createCtx(dialog)

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
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Content>
>(function ({ children, ...props }, ref) {
  return (
    <Portal>
      <Backdrop />
      <Positioner>
        <Content ref={ref} {...props}>
          {children}
        </Content>
      </Positioner>
    </Portal>
  )
})

CustomContent.displayName = "Content"

const CustomCloseTrigger = React.forwardRef<
  HTMLDivElement,
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
