import { createStore } from "@/libs/valtio"
import { _DEV_ } from "@/shared/config/mode.config"
import { storageKeys } from "@/shared/config/storage.config"
import { version } from "@/shared/config/version.config"
import { devtools } from "valtio/utils"
import { AppSettingModel } from "./app-setting.model"

const appSettingStore = createStore(new AppSettingModel(), {
  key: storageKeys.appSettings,
})

devtools(appSettingStore, { name: "App Setting", enabled: _DEV_ })

// Auto refresh version on first load
if (typeof document !== "undefined") {
  if (appSettingStore.version !== version) {
    localStorage.clear()
    appSettingStore.updateVersion(version)
    location.reload()
  }
}

export default appSettingStore
