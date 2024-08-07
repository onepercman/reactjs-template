import React from "react"
import { LuX } from "react-icons/lu"
import { Drawer } from "vaul"
import { createComponentCtx } from "../utils"
import { drawer } from "./variants"

const { withRoot, withSlot } = createComponentCtx(drawer)

export const Root = withRoot(Drawer.Root)
export const NestedRoot = withSlot(Drawer.NestedRoot)
export const Description = withSlot(Drawer.Description, "description")
export const Handle = withSlot(Drawer.Handle, "handle")
export const Overlay = withSlot(Drawer.Overlay, "overlay")
export const Portal = withSlot(Drawer.Portal)
export const Title = withSlot(Drawer.Title, "title")
export const Trigger = withSlot(Drawer.Trigger)

export const ContentPrimitive = withSlot(Drawer.Content, "content")
export const CloseTriggerPrimitive = withSlot(Drawer.Close, "closeTrigger")

export const Content = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ContentPrimitive>
>(function ({ children, ...props }, ref) {
  return (
    <Portal>
      <Overlay />
      <Portal>
        <ContentPrimitive ref={ref} {...props}>
          {children}
        </ContentPrimitive>
      </Portal>
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
