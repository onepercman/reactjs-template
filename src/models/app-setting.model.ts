import { storageKeys } from "@/config/storage.config"
import { version } from "@/config/version.config"
import { persistedProxy } from "@/libs/valtio"
import { subscribe } from "valtio"

class AppSettingModel {
  colorScheme: ColorScheme = "dark"
  version = "0.0"

  setColorScheme(colorScheme: ColorScheme) {
    this.colorScheme = colorScheme
  }

  updateVersion(version: string) {
    this.version = version
  }
}

export const appSettingProxy = persistedProxy(storageKeys.appSettings, new AppSettingModel())

export function applyColorScheme(colorScheme: ColorScheme) {
  document.documentElement.setAttribute("data-theme", colorScheme)
}

subscribe(appSettingProxy, function () {
  applyColorScheme(appSettingProxy.colorScheme)
})

// Auto set color scheme on first load
if (typeof document !== "undefined") {
  applyColorScheme(appSettingProxy.colorScheme)
}

// Auto refresh version on first load
if (typeof document !== "undefined") {
  if (appSettingProxy.version !== version) {
    localStorage.clear()
    appSettingProxy.updateVersion(version)
    location.reload()
  }
}
