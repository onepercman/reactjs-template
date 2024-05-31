import { cn } from "@/libs/tailwind-variants"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiX } from "react-icons/hi"
import { VariantProps, tv } from "tailwind-variants"

const drawer = tv({
  base: "fixed z-50 p-2",
  variants: {
    side: {
      right: "bottom-0 right-0 top-0 w-full",
      left: "bottom-0 left-0 top-0 w-full",
      top: "left-0 right-0 top-0 h-full",
      bottom: "left-0 right-0 bottom-0 h-full",
    },
  },
  defaultVariants: {
    side: "right",
  },
})

const drawerTransition = tv({
  base: "opacity-0",
  variants: {
    side: {
      right: "translate-x-full",
      left: "-translate-x-full",
      top: "-translate-y-full",
      bottom: "translate-y-full",
    },
  },
  defaultVariants: {
    side: "right",
  },
})

type DrawerVariantProps = VariantProps<typeof drawer>

export interface DrawerProps extends DrawerVariantProps {
  open?: boolean
  onClose?(): void
  closable?: boolean
  children?:
    | React.ReactNode
    | ((args: { open(): void; close(): void }) => React.ReactNode)
  title?: React.ReactNode
  trigger?: React.ReactElement
  width?: number | string
  height?: number | string
  className?: string
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(function (
  {
    open,
    onClose,
    side = "right",
    closable = true,
    children,
    title,
    trigger,
    width = 350,
    height,
    className,
  },
  ref,
) {
  const [show, setShow] = React.useState(Boolean(open))

  function handleClose() {
    if (closable) {
      if (trigger) {
        setShow(false)
      }
      onClose && onClose()
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
        <HeadlessUI.Dialog as="div" ref={ref} onClose={handleClose}>
          <HeadlessUI.Transition.Child
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <HeadlessUI.Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur" />
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
                maxWidth:
                  side && ["left", "right"].includes(side) ? width : "auto",
                maxHeight:
                  side && ["top", "bottom"].includes(side) ? height : "auto",
              }}
            >
              {/* Padding close */}
              <div className="absolute inset-0" onClick={handleClose} />
              {/* Padding close */}

              <div className="bg-component border-line relative h-full w-full cursor-auto overflow-hidden rounded border text-left align-middle shadow">
                {title && (
                  <HeadlessUI.Dialog.Title
                    as="h3"
                    className="mb-2 p-4 text-lg font-medium"
                  >
                    {title}
                  </HeadlessUI.Dialog.Title>
                )}
                {closable && (trigger || onClose) && (
                  <HiX
                    role="button"
                    className="absolute right-6 top-4 z-50"
                    onClick={handleClose}
                  />
                )}
                <div
                  className={cn(
                    "scrollbar-none h-full overflow-y-auto p-4",
                    className,
                  )}
                >
                  {getChildren()}
                </div>
              </div>
            </HeadlessUI.Dialog.Panel>
          </HeadlessUI.Transition.Child>
        </HeadlessUI.Dialog>
      </HeadlessUI.Transition>
    </React.Fragment>
  )
})

Drawer.displayName = "Drawer"
