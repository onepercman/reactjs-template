// ----------------- Hooks -----------------

import { version } from "@/config/version.config"
import { applyColorScheme } from "./app-settings.model"
import { useAppSettings } from "./root"

// Apply them onload
if (typeof document !== "undefined") {
  applyColorScheme(useAppSettings.getState().colorScheme)
}

// Auto apply colorScheme from system
if (typeof window !== "undefined") {
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
  matchMedia.addEventListener("change", (event) => {
    useAppSettings.getState().toggleColorScheme(event.matches ? "dark" : "light")
  })
}

// Check app version
export function checkVersion() {
  if (typeof window !== "undefined") {
    const { version: storedVersion } = useAppSettings.getState()
    if (storedVersion !== version) {
      localStorage.clear()
      sessionStorage.clear()
      useAppSettings.getState().setVersion(version)
    }
  }
}
