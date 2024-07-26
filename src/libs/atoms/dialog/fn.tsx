import React from "react"
import ReactDOM from "react-dom/client"
import { Button, ButtonProps } from "../button"
import { Dialog, DialogProps } from "./compact"

export function open({ children, onOpenChange, ...props }: DialogProps): {
  close(): void
} {
  const container = document.createDocumentFragment()

  const root = ReactDOM.createRoot(container)

  function close() {
    root.render(
      <Dialog open={false} unmountOnExit {...props}>
        {children}
      </Dialog>,
    )
  }

  root.render(
    <Dialog
      open={true}
      onOpenChange={function (details) {
        onOpenChange && onOpenChange(details)
        close()
      }}
      {...props}
    >
      {children}
    </Dialog>,
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
}: DialogProps & {
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
      children: ({ setOpen }) => (
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
                  confirmProps?.onClick?.constructor.name === "AsyncFunction"
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
      ),
      ...props,
    })
  })
}
