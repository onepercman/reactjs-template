import * as HeadlessUI from "@headlessui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { HiX } from "react-icons/hi"
import { cn } from "../utils/className"
import { Drawer } from "./drawer"

interface DialogProps {
  open?: boolean
  onClose?(): void
  closable?: boolean
  children?: React.ReactNode | ((args: { open(): void; close(): void }) => React.ReactNode)
  title?: React.ReactNode
  trigger?: React.ReactElement
  width?: number
  center?: boolean
  className?: string
}

const DialogPrimitive = React.forwardRef<HTMLDivElement, DialogProps>(function (
  { open, onClose, closable = true, children, title, trigger, width = 350, center, className },
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
      onClick() {
        setShow(true)
        trigger.props.onClick && trigger.props.onClick()
      },
    })

  React.useEffect(() => {
    setShow(!!open)
  }, [open])

  const _containerClassName = cn(
    "fixed inset-0 overflow-y-auto",
    "scrollbar scrollbar-track-inherit scrollbar-thumb-inherit scrollbar-w-1 scrollbar-thumb-rounded",
  )

  const _panelClassName = cn(
    "relative bg-component border-line m-auto w-full cursor-auto overflow-hidden rounded border p-base text-left align-middle shadow transition-all",
    center ? "m-auto" : "mx-auto mt-32",
  )

  return (
    <React.Fragment>
      {_trigger}
      <HeadlessUI.Transition appear show={show} as={React.Fragment}>
        <HeadlessUI.Dialog as="div" ref={ref} onClose={handleClose as any} className="z-50">
          <HeadlessUI.Transition.Child
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          </HeadlessUI.Transition.Child>

          <div className={_containerClassName}>
            <div className="p-base flex min-h-full text-center">
              <HeadlessUI.Transition.Child
                as={HeadlessUI.Dialog.Panel}
                enter="ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className={_panelClassName}
                style={{
                  maxWidth: width + "px",
                }}
              >
                {title && (
                  <HeadlessUI.Dialog.Title as="h3" className="mb-2 font-medium">
                    {title}
                  </HeadlessUI.Dialog.Title>
                )}
                {closable && (trigger || onClose) && (
                  <HiX role="button" className="absolute right-4 top-4" onClick={handleClose} />
                )}
                <HeadlessUI.Dialog.Panel className={className}>{getChildren()}</HeadlessUI.Dialog.Panel>
              </HeadlessUI.Transition.Child>
            </div>
          </div>
        </HeadlessUI.Dialog>
      </HeadlessUI.Transition>
    </React.Fragment>
  )
})

DialogPrimitive.displayName = "DialogPrimitive"

function openDialog({ children, onClose, ...props }: DialogProps): {
  close(): void
} {
  const container = document.createDocumentFragment()

  const root = ReactDOM.createRoot(container)

  function close() {
    root.render(
      <DialogPrimitive open={false} {...props}>
        {children}
      </DialogPrimitive>,
    )
  }

  root.render(
    <DialogPrimitive
      open={true}
      onClose={function () {
        onClose && onClose()
        close()
      }}
      {...props}
    >
      {children}
    </DialogPrimitive>,
  )

  return {
    close,
  }
}

interface Dialog extends React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDivElement>> {
  open: typeof openDialog
  Drawer: typeof Drawer
}

const Dialog = DialogPrimitive as Dialog

Dialog.open = openDialog
Dialog.Drawer = Drawer

export { Dialog }
export type { DialogProps }
