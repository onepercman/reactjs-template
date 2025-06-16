"use client"

import { Dialog as BaseDialog, DialogRootProps } from "@ark-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { LuX } from "react-icons/lu"
import {
  ComponentMetadata,
  ComposedTVProps,
  createComponentFactory,
  createComponentTree,
} from "react-tvcx"
import { tv } from "tailwind-variants"
import { Button } from "./button"

export const dialog = tv({
  slots: {
    backdrop: [
      "fixed inset-0 bg-background/80",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    positioner: "fixed inset-0 flex overflow-auto p-4",
    content: [
      "relative h-fit w-fit rounded border border-line bg-component p-4 shadow",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    title: "pb-4 text-sm font-medium",
    closeTrigger: "absolute right-4 top-3",
    description: "",
  },
  variants: {
    size: {
      sm: { content: "min-w-[340px]" },
      md: { content: "min-w-[640px]" },
      lg: { content: "min-w-[768px]" },
    },
    placement: {
      center: { content: "m-auto" },
      topCenter: { content: "mx-auto mt-24" },
      left: { content: "mr-auto h-full" },
      right: { content: "ml-auto h-full" },
    },
    scrollBehavior: {
      inside: "",
      outside: "",
    },
  },
  defaultVariants: {
    size: "sm",
    placement: "topCenter",
  },
})

const { withRoot, withSlot } = createComponentFactory(dialog)

const Root = withRoot(BaseDialog.Root)
const RootProvider = withSlot(BaseDialog.RootProvider)
const Backdrop = withSlot(BaseDialog.Backdrop, "backdrop")
const Context = withSlot(BaseDialog.Context)
const Description = withSlot(BaseDialog.Description, "description")
const Positioner = withSlot(BaseDialog.Positioner, "positioner")
const Title = withSlot(BaseDialog.Title, "title")
const Trigger = withSlot(BaseDialog.Trigger)
const Content = withSlot(BaseDialog.Content, "content")
const CloseTrigger = withSlot(BaseDialog.CloseTrigger, "closeTrigger")

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

function open({ children, onOpenChange, ...props }: DialogRootProps): {
  close(): void
} {
  const container = document.createDocumentFragment()

  const root = ReactDOM.createRoot(container)

  function close() {
    root.render(
      <Root open={false} unmountOnExit {...props}>
        <Content>{children}</Content>
      </Root>,
    )
  }

  root.render(
    <Root
      open={true}
      onOpenChange={function (details) {
        if (onOpenChange) {
          onOpenChange(details)
        }
        close()
      }}
      {...props}
    >
      <Content>{children}</Content>
    </Root>,
  )

  return {
    close,
  }
}

async function confirm({
  question,
  confirmProps,
  cancelProps,
  ...props
}: DialogRootProps & {
  question?: React.ReactNode
  confirmProps?: React.ComponentPropsWithoutRef<typeof Button>
  cancelProps?: React.ComponentPropsWithoutRef<typeof Button>
}) {
  return new Promise(function (resolve) {
    open({
      onOpenChange({ open }) {
        if (!open) {
          resolve(false)
        }
      },
      children: (
        <Context>
          {({ setOpen }) => (
            <div className="space-y-4">
              <div className="text-low text-sm">{question}</div>
              <div className="flex items-center justify-end gap-2">
                <Button
                  size="sm"
                  {...cancelProps}
                  onClick={async function (e) {
                    if (
                      cancelProps?.onClick?.constructor.name === "AsyncFunction"
                    ) {
                      await cancelProps?.onClick(e)
                    } else if (cancelProps?.onClick) {
                      cancelProps?.onClick(e)
                    }
                    setOpen(false)
                    resolve(false)
                  }}
                >
                  {cancelProps?.children || "Cancel"}
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  {...confirmProps}
                  onClick={async function (e) {
                    if (
                      confirmProps?.onClick?.constructor.name ===
                      "AsyncFunction"
                    ) {
                      await confirmProps?.onClick(e)
                    } else if (confirmProps?.onClick) {
                      confirmProps?.onClick(e)
                    }
                    resolve(true)
                    setOpen(false)
                  }}
                >
                  {confirmProps?.children || "Confirm"}
                </Button>
              </div>
            </div>
          )}
        </Context>
      ),
      ...props,
    })
  })
}

export interface DialogProps
  extends DialogRootProps,
    ComposedTVProps<typeof dialog> {}

export interface Dialog extends ComponentMetadata {
  (props: DialogProps): React.ReactElement | null
}

export const Dialog = createComponentTree(Root, {
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

Dialog.displayName = "Dialog"
