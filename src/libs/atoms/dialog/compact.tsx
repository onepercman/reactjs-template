import * as Ark from "@ark-ui/react"
import React from "react"
import { LuX } from "react-icons/lu"
import { Button } from "../button"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { dialog } from "./variants"

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
                    size="sm"
                    variant="outlined"
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

Dialog.displayName = "Dialog"
