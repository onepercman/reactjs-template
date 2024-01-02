import { Dialog, DialogProps } from "@/libs/ui/dialog"
import React, { useState } from "react"
import { v4 as uuid } from "uuid"

interface DialogPropsWithStackInfo extends DialogProps {
  id: string
}

interface DialogContext {
  open(props: DialogProps & { id?: string }): string
  close(id: string, destroy?: boolean): void
  closeAll(): void
}

const DialogContext = React.createContext<DialogContext>({
  open() {
    return ""
  },
  close() {},
  closeAll() {},
})

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [dialogs, setDialogs] = useState<DialogPropsWithStackInfo[]>([])

  function open(props: DialogProps & { id?: string } = {}) {
    const id = props.id || uuid()
    setDialogs(function (prev) {
      const history = [...prev]
      const dialog = history.find((el) => el.id === props.id)
      if (dialog) {
        history.forEach(function (dialog) {
          if (dialog.id === props.id) {
            dialog.open = true
          }
        })
      } else {
        history.push({
          ...props,
          id,
          open: true,
          onClose() {
            if (typeof props.onClose === "function") {
              props.onClose()
            } else {
              close(id)
              console.log("Added onclose id: ", id)
            }
          },
        })
      }
      return history
    })
    return id
  }

  function close(id: string) {
    setDialogs(function (prev) {
      const history = [...prev]
      history.forEach(function (dialog) {
        if (dialog.id === id) {
          dialog.open = false
        }
      })
      return history
    })
  }

  function closeAll() {
    setDialogs(function (prev) {
      const history = [...prev]
      history.forEach(function (dialog) {
        dialog.open = false
      })
      return history
    })
  }

  return (
    <DialogContext.Provider
      value={{
        open,
        close,
        closeAll,
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
