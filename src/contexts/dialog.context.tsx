import { Dialog, DialogProps } from "@/libs/ui/dialog"
import React, { useState } from "react"
import { v4 as uuid } from "uuid"

interface DialogPropsWithStackInfo extends DialogProps {
  id: string
}

interface DialogContext {
  open(props: DialogProps & { id?: string }): void
  close(id: string, destroy?: boolean): void
}

const DialogContext = React.createContext<DialogContext>({
  open() {},
  close() {},
})

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialogs, setDialogs] = useState<DialogPropsWithStackInfo[]>([])

  function open(props: DialogProps & { id?: string } = {}) {
    const history = [...dialogs]
    const dialog = history.find((el) => el.id === props.id)
    if (dialog) {
      history.forEach(function (dialog) {
        if (dialog.id === props.id) {
          dialog.open = true
        }
      })
    } else {
      const id = props.id || uuid()
      history.push({
        ...props,
        id: props.id || id,
        open: true,
      })
    }
    setDialogs(history)
  }

  function close(id: string, destroy?: boolean) {
    const history = [...dialogs]
    history.forEach(function (dialog) {
      if (dialog.id === id) {
        dialog.open = false
      }
    })
    if (destroy) {
      setDialogs(history.filter((el) => el.id !== id))
    }
  }

  return (
    <DialogContext.Provider
      value={{
        open,
        close,
      }}
    >
      {dialogs.map(function ({ id, children, ...props }) {
        return (
          <Dialog key={id} {...props}>
            {children as any}
          </Dialog>
        )
      })}
      {children}
    </DialogContext.Provider>
  )
}

const useDialog = () => React.useContext(DialogContext)

export { DialogProvider, useDialog }
export type { DialogContext, DialogPropsWithStackInfo }
