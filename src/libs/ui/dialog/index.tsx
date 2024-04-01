import React from "react"
import ReactDOM from "react-dom/client"
import { Dialog as DialogPrimitive, DialogProps } from "./dialog"
import { Drawer } from "./drawer"

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
