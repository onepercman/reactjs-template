import { Button } from "@/libs/ui/button"
import { dialog } from "@/libs/ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"
import { LuX } from "react-icons/lu"
import { VariantProps } from "tailwind-variants"

interface DialogProps extends Omit<Ark.DialogRootProps, "children">, VariantProps<typeof dialog> {
  trigger?: React.ReactNode
  title?: React.ReactNode
  children?: React.ReactNode | Ark.DialogContextProps["children"]
  className?: string
}

export interface Dialog extends ForwardedRefComponent {
  (props: DialogProps, ref: React.ForwardedRef<HTMLDivElement>): React.ReactElement | null
}

function _constructor(
  render: (props: DialogProps, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, DialogProps>(render) as unknown as Dialog
}

export const Dialog = _constructor(function ({ trigger, title, children, size, placement, className, ...props }, ref) {
  const classes = dialog({ size, placement, className })

  return (
    <Ark.Dialog.Root {...props}>
      <Ark.Dialog.Trigger asChild>{trigger}</Ark.Dialog.Trigger>
      <Ark.Portal>
        <Ark.Dialog.Backdrop className={classes.backdrop()} />
        <Ark.Dialog.Positioner className={classes.positioner()} style={{ zIndex: "var(--z-index-modal)" }}>
          <Ark.Dialog.Content ref={ref} className={classes.base()}>
            <Ark.Dialog.Title className={classes.title()}>Dialog Title</Ark.Dialog.Title>
            <Ark.Dialog.CloseTrigger asChild>
              <Button size="xs" shape="circle" leftIcon={<LuX />} className={classes.close()} />
            </Ark.Dialog.CloseTrigger>
            {typeof children === "function" ? <Ark.Dialog.Context>{children}</Ark.Dialog.Context> : children}
          </Ark.Dialog.Content>
        </Ark.Dialog.Positioner>
      </Ark.Portal>
    </Ark.Dialog.Root>
  )
})
