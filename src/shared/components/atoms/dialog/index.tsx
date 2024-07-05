import * as Ark from "@ark-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { LuX } from "react-icons/lu"
import { Button, ButtonProps } from "../button"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { dialog } from "../variants"

export interface DialogProps
  extends Omit<Ark.DialogRootProps, "children">,
    ComposedTVProps<typeof dialog> {
  trigger?: React.ReactNode
  title?: React.ReactNode
  children?: React.ReactNode | Ark.DialogContextProps["children"]
  className?: string
  closeTrigger?: boolean | React.ReactNode
}

export interface Dialog extends ForwardedRefComponent {
  (
    props: DialogProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): React.ReactElement | null
  open: typeof openDialog
  confirm: typeof openConfirmDialog
}

function _constructor(
  render: (
    props: DialogProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, DialogProps>(
    render,
  ) as unknown as Dialog
}

export const Dialog = _constructor(function (
  {
    trigger,
    title,
    children,
    size,
    placement,
    className,
    classNames,
    closeTrigger = true,
    ...props
  },
  ref,
) {
  const styles = dialog({ size, placement, className })

  return (
    <Ark.Dialog.Root {...props}>
      {trigger ? (
        <Ark.Dialog.Trigger asChild>{trigger}</Ark.Dialog.Trigger>
      ) : null}
      <Ark.Portal>
        <Ark.Dialog.Backdrop
          className={styles.backdrop({ class: classNames?.backdrop })}
        />
        <Ark.Dialog.Positioner
          className={styles.positioner({ class: classNames?.positioner })}
          style={{ zIndex: "var(--z-index-modal)" }}
        >
          <Ark.Dialog.Content
            ref={ref}
            className={styles.base({ class: classNames?.base })}
          >
            {title ? (
              <Ark.Dialog.Title
                className={styles.title({ class: classNames?.title })}
              >
                {title}
              </Ark.Dialog.Title>
            ) : null}
            {closeTrigger ? (
              <Ark.Dialog.CloseTrigger asChild>
                {typeof closeTrigger === "boolean" ? (
                  <Button
                    size="xs"
                    shape="circle"
                    leftIcon={<LuX />}
                    className={styles.close({ class: classNames?.close })}
                  />
                ) : (
                  closeTrigger
                )}
              </Ark.Dialog.CloseTrigger>
            ) : null}
            {typeof children === "function" ? (
              <Ark.Dialog.Context>{children}</Ark.Dialog.Context>
            ) : (
              children
            )}
          </Ark.Dialog.Content>
        </Ark.Dialog.Positioner>
      </Ark.Portal>
    </Ark.Dialog.Root>
  )
})

function openDialog({ children, onOpenChange, ...props }: DialogProps): {
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

async function openConfirmDialog({
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
    openDialog({
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

Dialog.open = openDialog
Dialog.confirm = openConfirmDialog

Dialog.displayName = "Dialog"
