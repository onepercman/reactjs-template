import { Button } from "@/libs/ui/button"
import * as Ark from "@ark-ui/react"
import React from "react"
import { LuX } from "react-icons/lu"
import { VariantProps, tv } from "tailwind-variants"

export const dialog = tv({
  base: "bg-component border border-line shadow p-4 rounded relative w-full space-y-4 h-fit data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out",
  slots: {
    backdrop:
      "fixed inset-0 bg-background/60 backdrop-blur data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out",
    positioner: "flex fixed inset-0 p-4",
    title: "text-sm font-medium",
    close: "absolute top-0 right-4",
    description: "",
  },
  variants: {
    size: {
      sm: "max-w-[340px]",
      md: "max-w-[640px]",
      lg: "max-w-[768px]",
    },
    placement: {
      center: "m-auto",
      topCenter: "mx-auto mt-24",
      left: "h-full mr-auto",
      right: "h-full ml-auto",
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
