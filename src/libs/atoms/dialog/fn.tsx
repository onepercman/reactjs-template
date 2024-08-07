import { DialogRootProps } from "@ark-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { Dialog } from "."
import { Button, ButtonProps } from "../button"

export function open({ children, onOpenChange, ...props }: DialogRootProps): {
  close(): void
} {
  const container = document.createDocumentFragment()

  const root = ReactDOM.createRoot(container)

  function close() {
    root.render(
      <Dialog.Root open={false} unmountOnExit {...props}>
        <Dialog.Content>{children}</Dialog.Content>
      </Dialog.Root>,
    )
  }

  root.render(
    <Dialog.Root
      open={true}
      onOpenChange={function (details) {
        onOpenChange && onOpenChange(details)
        close()
      }}
      {...props}
    >
      <Dialog.Content>{children}</Dialog.Content>
    </Dialog.Root>,
  )

  return {
    close,
  }
}

export async function confirm({
  question,
  confirmProps,
  cancelProps,
  ...props
}: DialogRootProps & {
  question?: React.ReactNode
  confirmProps?: ButtonProps
  cancelProps?: ButtonProps
}) {
  return new Promise(function (resolve) {
    open({
      onOpenChange({ open }) {
        if (!open) {
          resolve(false)
        }
      },
      children: (
        <Dialog.Context>
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
        </Dialog.Context>
      ),
      ...props,
    })
  })
}
