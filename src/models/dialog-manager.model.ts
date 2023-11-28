import { proxy, useSnapshot } from "valtio"
class DialogManagerModel {
  connect = false

  setConnect(value: boolean) {
    this.connect = value
  }
}

export const dialogManagerProxy = proxy(new DialogManagerModel())
export const useDialogManagerProxy = () => useSnapshot(dialogManagerProxy)
