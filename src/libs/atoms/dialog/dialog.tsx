import { Dialog, DialogRootProps, Portal } from "@ark-ui/react"
import React from "react"
import { LuX } from "react-icons/lu"
import { ForwardedRefComponent } from "../types"
import { createComponentCtx } from "../utils"
import { confirm, open } from "./fn"
import { dialog } from "./variants"

const { withRoot, withSlot } = createComponentCtx(dialog)

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

const CustomContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Content>>(function (
  { children, ...props },
  ref,
) {
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

const CustomCloseTrigger = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof CloseTrigger>>(
  function ({ children, ...props }, ref) {
    return (
      <CloseTrigger ref={ref} asChild {...props}>
        <LuX role="button" className="text-secondary" />
      </CloseTrigger>
    )
  },
)

CustomCloseTrigger.displayName = "CloseTrigger"

export interface Dialog extends ForwardedRefComponent {
  (props: DialogRootProps): React.ReactElement | null
  Root: typeof Root
  RootProvider: typeof RootProvider
  Backdrop: typeof Backdrop
  Context: typeof Context
  Description: typeof Description
  Positioner: typeof Positioner
  Title: typeof Title
  Trigger: typeof Trigger
  Content: typeof CustomContent
  CloseTrigger: typeof CustomCloseTrigger

  open: typeof open
  confirm: typeof confirm
}

export const Component = Root as any as Dialog

Component.displayName = "Dialog"

Component.Root = Root
Component.RootProvider = RootProvider
Component.Backdrop = Backdrop
Component.Context = Context
Component.Description = Description
Component.Positioner = Positioner
Component.Title = Title
Component.Trigger = Trigger
Component.Content = CustomContent
Component.CloseTrigger = CustomCloseTrigger

Component.open = open
Component.confirm = confirm
