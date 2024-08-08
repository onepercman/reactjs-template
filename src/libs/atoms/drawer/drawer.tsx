import React from "react"
import { LuX } from "react-icons/lu"
import { Drawer } from "vaul"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { open } from "./fn"
import { DialogProps } from "./types"
import { drawer } from "./variants"

const { withRoot, withSlot } = createComponentCtx(drawer)

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

export interface Drawer extends ForwardedRefComponent {
  (props: DialogProps): React.ReactElement | null
  Root: typeof Root
  NestedRoot: typeof NestedRoot
  Description: typeof Description
  Handle: typeof Handle
  Overlay: typeof Overlay
  Portal: typeof Portal
  Title: typeof Title
  Trigger: typeof Trigger
  Content: typeof CustomContent
  CloseTrigger: typeof CustomCloseTrigger

  open: typeof open
  confirm: typeof confirm
}

export const Component = Root as any as Drawer

Component.Root = Root
Component.NestedRoot = NestedRoot
Component.Description = Description
Component.Handle = Handle
Component.Overlay = Overlay
Component.Portal = Portal
Component.Title = Title
Component.Trigger = Trigger
Component.Content = CustomContent
Component.CloseTrigger = CustomCloseTrigger

Component.open = open
Component.confirm = confirm
