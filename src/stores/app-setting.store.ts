import { isDev } from "@/config/env.config"
import { storageKeys } from "@/config/storage.config"
import { version } from "@/config/version.config"
import { proxyWithPersist } from "@/libs/valtio"
import { subscribe, useSnapshot } from "valtio"
import { devtools } from "valtio/utils"

class AppSettingStore {
  colorScheme: ColorScheme = "dark"
  version = "0.0"

  showConnectDialog = false

  setColorScheme(colorScheme: ColorScheme) {
    this.colorScheme = colorScheme
  }

  updateVersion(version: string) {
    this.version = version
  }

  setShowConnectDialog(show: boolean) {
    this.showConnectDialog = show
  }
}

export const appSettingStore = proxyWithPersist(new AppSettingStore(), storageKeys.appSettings)

devtools(appSettingStore, { name: "App Setting", enabled: isDev })

export const useAppSettingStore = () => useSnapshot(appSettingStore)

export function applyColorScheme(colorScheme: ColorScheme) {
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
