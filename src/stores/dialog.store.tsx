import { isDev } from "@/config/env.config"
import { DialogProps } from "@/libs/ui/dialog"
import { v4 as uuid } from "uuid"
import { proxy, useSnapshot } from "valtio"
import { devtools } from "valtio/utils"

export interface DialogPropsWithStackInfo extends DialogProps {
  id: string
}

class DialogStore {
  dialogs: DialogPropsWithStackInfo[] = []

  open(props: DialogProps & { id?: string } = {}) {
    const dialog = this.dialogs.find((el) => el.id === props.id)
    if (dialog) {
      this.dialogs.forEach(function (dialog) {
        if (dialog.id === props.id) {
          dialog.open = true
        }
      })
    } else {
      const id = props.id || uuid()
      this.dialogs.push({
        ...props,
        id: props.id || id,
        open: true,
      })
    }
  }

  close(id: string, destroy?: boolean) {
    this.dialogs.forEach(function (dialog) {
      if (dialog.id === id) {
        dialog.open = false
      }
    })
    if (destroy) {
      this.dialogs = this.dialogs.filter((el) => el.id !== id)
    }
  }
}

const dialogStore = proxy(new DialogStore())

devtools(dialogStore, { name: "Dialog", enabled: isDev })

const useDialogStore = () => useSnapshot(dialogStore)

export { dialogStore, useDialogStore }
