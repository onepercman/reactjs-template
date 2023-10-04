import { storageKeys } from "@/config/storage.config"
import { User } from "@/types/auth"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { AppSettingsModel, appSettingsModel } from "./app-settings.model"
import { ClientModel, clientModel } from "./client.model"
import { DialogManagerModel, dialogManagerModel } from "./dialog-manager.model"
import { userModel } from "./user.model"

export const useDialogManager = create<DialogManagerModel>()(dialogManagerModel)

export const useAppSettings = create<AppSettingsModel>()(
  persist(appSettingsModel, {
    name: storageKeys.appSettings,
  }),
)

export const useUser = create<User>()(
  persist(userModel, {
    name: storageKeys.user,
  }),
)

export const useClient = create<ClientModel>()(
  persist(clientModel, {
    name: storageKeys.client,
  }),
)
