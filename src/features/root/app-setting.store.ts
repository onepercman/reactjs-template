import { _DEV_ } from "@/config/mode.config"
import { storageKeys } from "@/config/storage.config"
import { version } from "@/config/version.config"
import { createStore } from "use-valtio-store"
import { devtools } from "valtio/utils"
import { AppSettingModel } from "./app-setting.model"

const AppSettingStore = createStore(new AppSettingModel(), {
  key: storageKeys.appSettings,
})

devtools(AppSettingStore, { name: "App Setting", enabled: _DEV_ })

// Auto refresh version on first load
if (typeof document !== "undefined") {
  if (AppSettingStore.version !== version) {
    localStorage.clear()
    AppSettingStore.updateVersion(version)
    location.reload()
  }
}

export default AppSettingStore
