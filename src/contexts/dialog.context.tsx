import { Dialog, DialogProps } from "@/libs/ui/dialog"
import React, { useMemo, useState } from "react"
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

  const dialog = useMemo(
    function () {
      const ctx = dialogs[dialogs.length - 1]
      return ctx
    },
    [dialogs],
  )

  function open(props: DialogProps & { id?: string } = {}) {
    const id = props.id || uuid()
    setDialogs(function (prev) {
      const history = [...prev]
      const dialog = history.find((el) => el.id === props.id)
      const dialogIndex = history.findIndex((obj) => obj.id === dialog?.id)
      if (dialog) {
        history.splice(dialogIndex, 1)
        history.push(dialog)
      } else {
        history.push({
          ...props,
          id,
          z: history.length,
          onClose() {
            if (typeof props.onClose === "function") {
              props.onClose()
            } else {
              close(id)
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
      return prev.filter((el) => el.id !== id)
    })
  }

  function closeAll() {
    setDialogs([])
  }

  return (
    <DialogContext.Provider
      value={{
        open,
        close,
        closeAll,
      }}
    >
      <Dialog open={!!dialogs.length} {...dialog}>
        {dialog?.children}
      </Dialog>
      {children}
    </DialogContext.Provider>
  )
}

const useDialog = () => React.useContext(DialogContext)

export { DialogProvider, useDialog }
export type { DialogContext, DialogPropsWithStackInfo }
