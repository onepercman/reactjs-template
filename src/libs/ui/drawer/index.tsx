"use client"

import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiX } from "react-icons/hi"
import { cn } from "../utils/className"
import { DrawerVariantProps, drawer, drawerTransition } from "./variants"

export interface DrawerProps extends DrawerVariantProps {
  open?: boolean
  onClose?(): void
  closable?: boolean
  children?: React.ReactNode | ((args: { open(): void; close(): void }) => React.ReactNode)
  title?: React.ReactNode
  trigger?: React.ReactElement
  width?: number
  height?: number
  className?: string
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(function (
  { open, onClose, side = "right", closable = true, children, title, trigger, width = 350, height = 250, className },
  ref,
) {
  const [show, setShow] = React.useState(Boolean(open))

  function handleClose() {
    if (closable) {
      if (trigger) {
        setShow(false)
      } else if (onClose) {
        onClose()
        setShow(false)
      }
    }
  }

  function getChildren() {
    if (typeof children === "function") {
      return children({
        open() {
          setShow(true)
        },
        close() {
          handleClose()
        },
      })
    }
    return children
  }

  const _trigger =
    trigger &&
    React.cloneElement(trigger, {
      onClick: () => {
        setShow(true)
        const { props } = trigger
        props.onClick && props.onClick()
      },
    })

  React.useEffect(() => {
    setShow(!!open)
  }, [open])

  return (
    <React.Fragment>
      {_trigger}
      <HeadlessUI.Transition appear show={show} as={React.Fragment}>
        <HeadlessUI.Dialog as="div" ref={ref} open={open} onClose={handleClose}>
          <HeadlessUI.Transition.Child
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur" />
          </HeadlessUI.Transition.Child>

          <HeadlessUI.Transition.Child
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom={drawerTransition({ side })}
            enterTo="opacity-100 translate-x-0 translate-y-0"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 translate-x-0 translate-y-0"
            leaveTo={drawerTransition({ side })}
          >
            <HeadlessUI.Dialog.Panel
              className={drawer({ side })}
              style={{
                maxWidth: side === "left" || side === "right" ? width + "px" : "auto",
                maxHeight: side === "top" || side === "bottom" ? height + "px" : "auto",
              }}
            >
              {/* Padding close */}
              <div className="absolute inset-0" onClick={handleClose} />
              {/* Padding close */}

              <div className="bg-component border-muted relative h-full w-full cursor-auto overflow-hidden rounded border text-left align-middle shadow">
                {title && (
                  <HeadlessUI.Dialog.Title as="h3" className="mb-2 p-6 text-lg font-medium">
                    {title}
                  </HeadlessUI.Dialog.Title>
                )}
                {closable && (trigger || onClose) && (
                  <HiX role="button" className="absolute right-6 top-6" onClick={handleClose} />
                )}
                <div className={cn("scrollbar-none h-full overflow-y-auto p-6", className)}>{getChildren()}</div>
              </div>
            </HeadlessUI.Dialog.Panel>
          </HeadlessUI.Transition.Child>
        </HeadlessUI.Dialog>
      </HeadlessUI.Transition>
    </React.Fragment>
  )
})

Drawer.displayName = "Drawer"
