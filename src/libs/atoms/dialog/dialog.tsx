import { Dialog, Portal } from "@ark-ui/react"
import React from "react"
import { LuX } from "react-icons/lu"
import { createComponentCtx } from "../utils"
import { dialog } from "./variants"

const { withRoot, withSlot } = createComponentCtx(dialog)

export const Root = withRoot(Dialog.Root)
export const RootProvider = withSlot(Dialog.RootProvider)
export const Backdrop = withSlot(Dialog.Backdrop, "backdrop")
export const Context = withSlot(Dialog.Context)
export const Description = withSlot(Dialog.Description, "description")
export const Positioner = withSlot(Dialog.Positioner, "positioner")
export const Title = withSlot(Dialog.Title, "title")
export const Trigger = withSlot(Dialog.Trigger)

export const ContentPrimitive = withSlot(Dialog.Content, "content")
export const CloseTriggerPrimitive = withSlot(
  Dialog.CloseTrigger,
  "closeTrigger",
)

export const Content = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ContentPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <Portal>
      <Backdrop />
      <Positioner>
        <ContentPrimitive ref={ref} {...props}>
          {children}
        </ContentPrimitive>
      </Positioner>
    </Portal>
  )
})

Content.displayName = "Content"

export const CloseTrigger = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CloseTriggerPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <CloseTriggerPrimitive ref={ref} asChild {...props}>
      <LuX role="button" className="text-secondary" />
    </CloseTriggerPrimitive>
  )
})

CloseTrigger.displayName = "CloseTrigger"
