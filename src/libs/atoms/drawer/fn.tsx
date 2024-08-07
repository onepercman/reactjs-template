import React from "react"
import ReactDOM from "react-dom/client"
import { Button, ButtonProps } from "../button"
import { Content, Root } from "./drawer"

export function open({
  children,
  onClose,
  ...props
}: React.ComponentPropsWithoutRef<typeof Root>): {
  close(): void
} {
  const container = document.createDocumentFragment()

  const root = ReactDOM.createRoot(container)

  function close() {
    root.render(
      <Root open={false} {...props}>
        <Content>{children}</Content>
      </Root>,
    )
  }

  root.render(
    <Root
      open={true}
      onClose={function () {
        onClose && onClose()
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

export async function confirm({
  question,
  confirmProps,
  cancelProps,
  ...props
}: React.ComponentPropsWithoutRef<typeof Root> & {
  question?: React.ReactNode
  confirmProps?: ButtonProps
  cancelProps?: ButtonProps
}) {
  return new Promise(function (resolve) {
    const d = open({
      onClose() {
        resolve(false)
      },
      modal: true,
      children: (
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
                  await cancelProps.onClick(e)
                } else {
                  cancelProps?.onClick && cancelProps.onClick(e)
                }
                resolve(false)
                d.close()
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
                d.close()
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

export function dismiss(id: string) {
  document.querySelectorAll(`[data-dismiss=${id}]`).forEach((el) => {
    return (el as HTMLElement).click()
  })
}
