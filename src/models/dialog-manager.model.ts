import { StateCreator } from "zustand"

export interface DialogManagerModel {
  connect: boolean

  setConnect(connect: boolean): void
}

export const dialogManagerModel: StateCreator<DialogManagerModel> = function (set) {
  return {
    connect: false,

    setConnect(connect) {
      set({ connect })
    },
  }
}
