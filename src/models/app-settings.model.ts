import { immer } from "zustand/middleware/immer"

export type ColorScheme = "dark" | "light"

export const defaultColorScheme: ColorScheme = "dark"

export function applyColorScheme(colorScheme: ColorScheme) {
  document.documentElement.setAttribute("data-theme", colorScheme)
}

export interface AppSettingsModel {
  version: string
  colorScheme: ColorScheme

  setVersion(version: string): void
  toggleColorScheme(colorScheme?: ColorScheme): void
}

export const appSettingsModel = immer<AppSettingsModel>(function (set) {
  return {
    version: "0.0",
    colorScheme: defaultColorScheme,

    setVersion(version) {
      set(function (state) {
        state.version = version
      })
    },

    toggleColorScheme(colorScheme) {
      set(function (state) {
        const autoSelected = state.colorScheme === "dark" ? "light" : "dark"
        const color = colorScheme || autoSelected
        applyColorScheme(color)
        state.colorScheme = color
      })
    },
  }
})
