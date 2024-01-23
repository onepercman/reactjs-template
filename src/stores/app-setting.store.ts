import { isDev } from "@/config/mode.config"
import { storageKeys } from "@/config/storage.config"
import { version } from "@/config/version.config"
import { createStore } from "@/libs/valtio"
import { subscribe } from "valtio"
import { devtools } from "valtio/utils"

class AppSettingStore {
  colorScheme: ColorScheme = "dark"
  version = "0.0"

  setColorScheme(colorScheme: ColorScheme) {
    this.colorScheme = colorScheme
  }

  updateVersion(version: string) {
    this.version = version
  }
}

const appSettingStore = createStore(new AppSettingStore(), { key: storageKeys.appSettings })

devtools(appSettingStore, { name: "App Setting", enabled: isDev })

function applyColorScheme(colorScheme: ColorScheme) {
  document.documentElement.setAttribute("data-theme", colorScheme)
}

subscribe(appSettingStore, function () {
  applyColorScheme(appSettingStore.colorScheme)
})

// Auto set color scheme on first load
if (typeof document !== "undefined") {
  applyColorScheme(appSettingStore.colorScheme)
}

// Auto refresh version on first load
if (typeof document !== "undefined") {
  if (appSettingStore.version !== version) {
    localStorage.clear()
    appSettingStore.updateVersion(version)
    location.reload()
  }
}

export default appSettingStore
