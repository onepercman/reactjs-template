import React from "react"
import { LuX } from "react-icons/lu"
import { Drawer } from "vaul"
import { createCtx, createFactory } from "../utils"
import { open } from "./fn"
import { drawer } from "./variants"

const { withRoot, withSlot } = createCtx(drawer)

const Root = withRoot(Drawer.Root)
const NestedRoot = withSlot(Drawer.NestedRoot)
const Description = withSlot(Drawer.Description, "description")
const Handle = withSlot(Drawer.Handle, "handle")
const Overlay = withSlot(Drawer.Overlay, "overlay")
const Portal = withSlot(Drawer.Portal)
const Title = withSlot(Drawer.Title, "title")
const Trigger = withSlot(Drawer.Trigger)
const Content = withSlot(Drawer.Content, "content")
const CloseTrigger = withSlot(Drawer.Close, "closeTrigger")

const CustomContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Content>>(function (
  { children, ...props },
  ref,
) {
  return (
    <Portal>
      <Overlay />
      <Portal>
        <Content ref={ref} {...props}>
          {children}
        </Content>
      </Portal>
    </Portal>
  )
})

Content.displayName = "Content"

const CustomCloseTrigger = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof CloseTrigger>>(
  function ({ children, ...props }, ref) {
    return (
      <CloseTrigger ref={ref} asChild {...props}>
        <LuX role="button" className="text-secondary" />
      </CloseTrigger>
    )
  },
)

CloseTrigger.displayName = "CloseTrigger"

export const Component = createFactory(Root, {
  Root,
  NestedRoot,
  Description,
  Handle,
  Overlay,
  Portal,
  Title,
  Trigger,
  Content: CustomContent,
  CloseTrigger: CustomCloseTrigger,
  open,
  confirm,
})

Component.displayName = "Drawer"
