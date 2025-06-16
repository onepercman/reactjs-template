"use client"

import React from "react"
import ReactDOM from "react-dom/client"
import { LuX } from "react-icons/lu"
import { createComponentFactory, createComponentTree } from "react-tvcx"
import { tv } from "tailwind-variants"
import { Drawer } from "vaul"
import { Button } from "./button"

export type DrawerProps = React.ComponentPropsWithoutRef<typeof Drawer.Root>

export const drawer = tv({
  slots: {
    overlay: "fixed inset-0 bg-background/50 backdrop-blur",
    handle: "bg-foreground/50",
    closeTrigger: "absolute right-4 top-4 text-secondary",
    content: [
      "fixed rounded bg-component p-4",
      "min-w-52 [&[vaul-drawer-direction=left]]:left-0",
      "[&[vaul-drawer-direction=left]]:top-0",
      "[&[vaul-drawer-direction=left]]:bottom-0",
      "min-w-52 [&[vaul-drawer-direction=right]]:right-0",
      "[&[vaul-drawer-direction=right]]:top-0",
      "[&[vaul-drawer-direction=right]]:bottom-0",
      "min-h-52 [&[vaul-drawer-direction=bottom]]:bottom-0",
      "[&[vaul-drawer-direction=bottom]]:left-0",
      "[&[vaul-drawer-direction=bottom]]:right-0",
      "min-h-52 [&[vaul-drawer-direction=top]]:top-0",
      "[&[vaul-drawer-direction=top]]:left-0",
      "[&[vaul-drawer-direction=top]]:right-0",
    ],
    title: "py-2 text-sm font-medium",
    description: "text-sm text-secondary",
  },
})

const { withRoot, withSlot } = createComponentFactory(drawer)

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

const CustomContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(function ({ children, ...props }, ref) {
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

CustomContent.displayName = "Content"

const CustomCloseTrigger = React.forwardRef<
  React.ElementRef<typeof CloseTrigger>,
  React.ComponentPropsWithoutRef<typeof CloseTrigger>
>(function ({ children, ...props }, ref) {
  return (
    <CloseTrigger ref={ref} {...props}>
      {children || <LuX className="h-4 w-4" />}
    </CloseTrigger>
  )
})

CustomCloseTrigger.displayName = "CloseTrigger"

export const Component = createComponentTree(Root, {
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
  dismiss,
})

Component.displayName = "Drawer"

function open({ children, onClose, ...props }: DrawerProps): {
  close: () => void
} {
  const root = ReactDOM.createRoot(document.createElement("div"))

  function close() {
    root.render(
      <Drawer.Root open={false} {...props}>
        <Drawer.Content>{children}</Drawer.Content>
      </Drawer.Root>,
    )
  }

  root.render(
    <Drawer.Root
      open={true}
      onClose={function () {
        close()
        onClose?.()
      }}
      {...props}
    >
      <Drawer.Content>{children}</Drawer.Content>
    </Drawer.Root>,
  )

  return { close }
}

function confirm({
  children,
  onConfirm,
  onCancel,
  ...props
}: DrawerProps & {
  onConfirm?: () => void
  onCancel?: () => void
}): {
  close: () => void
} {
  const root = ReactDOM.createRoot(document.createElement("div"))

  function close() {
    root.render(
      <Drawer.Root open={false} {...props}>
        <Drawer.Content>{children}</Drawer.Content>
      </Drawer.Root>,
    )
  }

  root.render(
    <Drawer.Root
      open={true}
      onClose={function () {
        close()
        onCancel?.()
      }}
      {...props}
    >
      <Drawer.Content>
        {children}
        <div className="mt-4 flex justify-end gap-2">
          <Button
            variant="outlined"
            onClick={function () {
              close()
              onCancel?.()
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={function () {
              close()
              onConfirm?.()
            }}
          >
            Confirm
          </Button>
        </div>
      </Drawer.Content>
    </Drawer.Root>,
  )

  return { close }
}

function dismiss(id: string) {
  document.querySelectorAll(`[data-dismiss=${id}]`).forEach(el => {
    return (el as HTMLElement).click()
  })
}
